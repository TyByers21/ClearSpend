
import { useState, useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, TestTube } from "lucide-react";
import { usePlaid } from "@/hooks/usePlaid";
import { useToast } from "@/components/ui/use-toast";

export default function Accounts() {
  const { toast } = useToast();
  const { 
    linkToken, 
    startLinkProcess, 
    handlePublicToken, 
    startTestLinkProcess,
    isCreatingTestToken,
    isLoading
  } = usePlaid();
  
  // Initialize link token when component mounts
  useEffect(() => {
    if (!linkToken) {
      startLinkProcess();
    }
  }, [linkToken, startLinkProcess]);

  const onSuccess = useCallback((public_token: string) => {
    handlePublicToken(public_token, {
      onSuccess: () => {
        toast({
          title: "Account connected successfully",
          description: "Your bank account has been linked to ClearSpend.",
        });
      },
      onError: (error: any) => {
        toast({
          title: "Error connecting account",
          description: error.message || "Failed to connect your account. Please try again.",
          variant: "destructive",
        });
      },
    });
  }, [handlePublicToken, toast]);

  // Configure Plaid Link
  const config = {
    token: linkToken,
    onSuccess,
    onExit: () => {
      toast({
        title: "Connection canceled",
        description: "You've canceled the bank account connection process.",
      });
    },
  };

  const { open, ready } = usePlaidLink(config);

  // Handler for the Connect Bank Account button
  const handleConnectBank = () => {
    if (ready && open) {
      open();
    } else {
      startLinkProcess();
      toast({
        title: "Preparing connection",
        description: "Please wait while we set up the secure connection.",
      });
    }
  };

  // Handler for the Test Connection button
  const handleTestConnection = () => {
    startTestLinkProcess({
      onSuccess: (token) => {
        if (token) {
          onSuccess(token);
          toast({
            title: "Test connection initiated",
            description: "Connecting to test bank account...",
          });
        }
      },
      onError: (error) => {
        toast({
          title: "Error creating test connection",
          description: "Failed to create test connection. Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <DashboardLayout title="Accounts" description="Manage your financial accounts">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Account Management</CardTitle>
            <div className="flex gap-4">
              <Button 
                onClick={handleTestConnection}
                disabled={isCreatingTestToken}
                variant="secondary"
              >
                <TestTube className="w-4 h-4 mr-2" />
                {isCreatingTestToken ? "Connecting..." : "Test Connection"}
              </Button>
              <Button 
                onClick={handleConnectBank}
                disabled={!linkToken || isLoading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Connect Bank Account
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Connect your bank accounts to start tracking your finances in real-time.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
