
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Help() {
  return (
    <DashboardLayout title="Help & Support" description="Get help with using WealthSync AI">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Help Center</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Support resources will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
