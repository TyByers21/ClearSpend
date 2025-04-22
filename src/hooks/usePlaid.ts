
import { useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface PlaidCallbackOptions {
  onSuccess?: (token?: string) => void;
  onError?: (error: any) => void;
}

export function usePlaid() {
  const { user } = useAuth();
  const [linkToken, setLinkToken] = useState<string | null>(null);

  const createLinkToken = useCallback(async () => {
    if (!user) {
      throw new Error('User must be authenticated');
    }
    
    const response = await fetch("https://gojhagvztagmxnhpgafa.supabase.co/functions/v1/plaid", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvamhhZ3Z6dGFnbXhuaHBnYWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MjA0NjcsImV4cCI6MjA2MDQ5NjQ2N30.EO3RLbgHZdZeaxLgVoBcTj5cpVh_rvyH4Nnz8L5Q9xI`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create_link_token',
        user_id: user.id,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to create link token:', errorData);
      throw new Error('Failed to create link token');
    }

    const data = await response.json();
    return data.link_token;
  }, [user]);

  const exchangePublicToken = useCallback(async (publicToken: string) => {
    if (!user) {
      throw new Error('User must be authenticated');
    }

    const response = await fetch("https://gojhagvztagmxnhpgafa.supabase.co/functions/v1/plaid", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvamhhZ3Z6dGFnbXhuaHBnYWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MjA0NjcsImV4cCI6MjA2MDQ5NjQ2N30.EO3RLbgHZdZeaxLgVoBcTj5cpVh_rvyH4Nnz8L5Q9xI`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'exchange_public_token',
        public_token: publicToken,
        user_id: user.id,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to exchange public token:', errorData);
      throw new Error('Failed to exchange public token');
    }

    return response.json();
  }, [user]);

  const createTestPublicToken = useCallback(async () => {
    if (!user) {
      throw new Error('User must be authenticated');
    }
    
    const response = await fetch("https://gojhagvztagmxnhpgafa.supabase.co/functions/v1/plaid", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvamhhZ3Z6dGFnbXhuaHBnYWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MjA0NjcsImV4cCI6MjA2MDQ5NjQ2N30.EO3RLbgHZdZeaxLgVoBcTj5cpVh_rvyH4Nnz8L5Q9xI`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create_test_public_token',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Failed to create test public token:', errorData);
      throw new Error('Failed to create test public token');
    }

    const data = await response.json();
    return data.public_token;
  }, [user]);

  const { mutate: startLinkProcess, isPending: isCreatingLinkToken } = useMutation({
    mutationFn: createLinkToken,
    onSuccess: (token) => {
      setLinkToken(token);
    },
    onError: (error) => {
      console.error('Error creating link token:', error);
    }
  });

  const { mutate: handlePublicToken, isPending: isExchangingToken } = useMutation({
    mutationFn: ({ token, options }: { token: string, options?: PlaidCallbackOptions }) => 
      exchangePublicToken(token),
    onSuccess: (_, { options }) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: (error, { options }) => {
      if (options?.onError) {
        options.onError(error);
      }
    }
  });

  const { mutate: startTestLinkProcess, isPending: isCreatingTestToken } = useMutation({
    mutationFn: async (options?: PlaidCallbackOptions) => {
      try {
        const token = await createTestPublicToken();
        if (options?.onSuccess) {
          options.onSuccess(token);
        }
        return token;
      } catch (error) {
        if (options?.onError) {
          options.onError(error);
        }
        throw error;
      }
    },
    onError: (error) => {
      console.error('Error creating test public token:', error);
    }
  });

  const handlePublicTokenWithOptions = useCallback((token: string, options?: PlaidCallbackOptions) => {
    handlePublicToken({ token, options });
  }, [handlePublicToken]);

  return {
    linkToken,
    startLinkProcess,
    handlePublicToken: handlePublicTokenWithOptions,
    isLoading: isCreatingLinkToken || isExchangingToken,
    startTestLinkProcess,
    isCreatingTestToken
  };
}
