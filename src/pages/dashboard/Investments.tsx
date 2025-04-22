
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Investments() {
  return (
    <DashboardLayout title="Investments" description="Track and manage your investments">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Investment Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Your investments will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
