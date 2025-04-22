
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Budgets() {
  return (
    <DashboardLayout title="Budgets" description="Manage and track your spending by category">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Budget Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Your budget management tools will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
