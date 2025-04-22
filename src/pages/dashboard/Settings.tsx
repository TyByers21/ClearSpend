
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
  return (
    <DashboardLayout title="Settings" description="Customize your WealthSync AI experience">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Application Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Settings options will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
