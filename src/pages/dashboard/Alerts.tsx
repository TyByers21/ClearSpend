
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Alerts() {
  return (
    <DashboardLayout title="Alerts & Bills" description="Manage your upcoming payments and alerts">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Alerts & Upcoming Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Your alerts and upcoming bills will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
