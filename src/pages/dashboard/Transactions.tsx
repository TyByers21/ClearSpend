
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Transactions() {
  return (
    <DashboardLayout title="Transactions" description="View and manage your transactions">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Your transactions will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
