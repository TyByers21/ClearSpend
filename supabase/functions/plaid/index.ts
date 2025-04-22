
import { serve } from "https://deno.land/std@0.204.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Configuration, PlaidApi, PlaidEnvironments } from 'https://esm.sh/plaid@18.2.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create a Plaid client
const plaidClient = new PlaidApi(
  new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': Deno.env.get('PLAID_CLIENT_ID')!,
        'PLAID-SECRET': Deno.env.get('PLAID_SECRET')!,
      },
    },
  })
);

// Create a Supabase client
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  try {
    const requestData = await req.json();
    const { action } = requestData;
    console.log("Plaid function called with action:", action);

    switch (action) {
      case 'create_link_token': {
        const { user_id } = requestData;
        console.log("Creating link token for user:", user_id);
        
        if (!user_id) {
          return new Response(JSON.stringify({ error: "Missing user_id" }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        try {
          const createTokenResponse = await plaidClient.linkTokenCreate({
            user: { client_user_id: user_id },
            client_name: 'ClearSpend',
            products: ['auth', 'transactions'],
            country_codes: ['US'],
            language: 'en',
            webhook: `${Deno.env.get('SUPABASE_URL')}/functions/v1/plaid-webhook`,
          });
          
          console.log("Link token created successfully");
          return new Response(JSON.stringify(createTokenResponse.data), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error("Error creating link token:", error);
          return new Response(JSON.stringify({ error: error.message || "Failed to create link token" }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      case 'exchange_public_token': {
        const { public_token, user_id } = requestData;
        console.log("Exchanging public token for user:", user_id);
        
        if (!public_token || !user_id) {
          return new Response(JSON.stringify({ error: "Missing required parameters" }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        try {
          const exchangeResponse = await plaidClient.itemPublicTokenExchange({
            public_token,
          });

          const { access_token, item_id } = exchangeResponse.data;
          console.log("Public token exchanged successfully, item_id:", item_id);

          // Save the access token and item_id in the database
          const { error } = await supabaseClient
            .from('plaid_items')
            .insert({
              user_id,
              access_token,
              item_id,
            });

          if (error) {
            console.error("Error saving to database:", error);
            throw new Error("Failed to save connection to database");
          }

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error("Error exchanging public token:", error);
          return new Response(JSON.stringify({ error: error.message || "Failed to exchange public token" }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      case 'create_test_public_token': {
        try {
          const createPublicTokenResponse = await fetch('https://sandbox.plaid.com/sandbox/public_token/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              client_id: Deno.env.get('PLAID_CLIENT_ID')!,
              secret: Deno.env.get('PLAID_SECRET')!,
              institution_id: 'ins_1', // Default test institution
              initial_products: ['auth', 'transactions']
            })
          });

          if (!createPublicTokenResponse.ok) {
            const errorData = await createPublicTokenResponse.json();
            console.error('Failed to create test public token:', errorData);
            return new Response(JSON.stringify({ error: 'Failed to create test public token' }), {
              status: 500,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }

          const publicTokenData = await createPublicTokenResponse.json();
          console.log('Test public token created successfully');

          return new Response(JSON.stringify(publicTokenData), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Error creating test public token:', error);
          return new Response(JSON.stringify({ error: 'Internal server error creating test token' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      default:
        return new Response(JSON.stringify({ error: 'Invalid action' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
  } catch (error) {
    console.error("General error in Plaid function:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
