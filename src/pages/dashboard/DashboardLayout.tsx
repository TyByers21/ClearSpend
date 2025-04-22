
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

export default function DashboardLayout({ 
  children, 
  title,
  description = "" 
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-1">{title}</h1>
            {description && <p className="text-gray-300">{description}</p>}
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
