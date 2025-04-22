
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  PieChart,
  Wallet,
  CreditCard,
  TrendingUp,
  Bell,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Plus,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

// Define sidebar menu items
const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Budgets",
    icon: PieChart,
    path: "/dashboard/budgets",
  },
  {
    title: "Accounts",
    icon: Wallet,
    path: "/dashboard/accounts",
  },
  {
    title: "Transactions",
    icon: CreditCard,
    path: "/dashboard/transactions",
  },
  {
    title: "Investments",
    icon: TrendingUp,
    path: "/dashboard/investments",
  },
  {
    title: "Alerts & Bills",
    icon: Bell,
    path: "/dashboard/alerts",
  },
];

// Define bottom sidebar menu items
const bottomMenuItems = [
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    path: "/dashboard/help",
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Function to check if a path is active
  const isActive = (path: string) => {
    // Exact match for dashboard, but prefix match for subpaths
    if (path === "/dashboard") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Handle Add Account button click
  const handleAddAccount = () => {
    navigate('/dashboard/accounts');
  };

  return (
    <div
      className={cn(
        "h-screen bg-gradient-to-b from-slate-900 to-slate-800 border-r border-white/10 flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Sidebar header */}
      <div className="flex items-center h-16 border-b border-white/10 px-4">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/20">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white animate-pulse">ClearSpend</span>
          </Link>
        )}
        {collapsed && (
          <Link to="/dashboard" className="flex mx-auto">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/20">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
          </Link>
        )}
      </div>

      {/* Add Account Button */}
      <div className={cn("p-4", collapsed ? "px-2" : "")}>
        <Button 
          className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
          size={collapsed ? "icon" : "default"}
          onClick={handleAddAccount}
        >
          {collapsed ? (
            <Plus className="h-5 w-5" />
          ) : (
            <span className="flex items-center">
              <Plus className="h-4 w-4 mr-2" /> Add Account
            </span>
          )}
        </Button>
      </div>

      {/* Main menu */}
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:translate-x-1",
                isActive(item.path)
                  ? "bg-blue-600/20 text-blue-400 shadow-md"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-blue-300"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive(item.path) ? "text-blue-400" : "text-gray-400"
                )}
              />
              {!collapsed && <span className="ml-3">{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="p-2 border-t border-white/10">
        <nav className="space-y-1">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:translate-x-1",
                isActive(item.path)
                  ? "bg-blue-600/20 text-blue-400 shadow-md"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-blue-300"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive(item.path) ? "text-blue-400" : "text-gray-400"
                )}
              />
              {!collapsed && <span className="ml-3">{item.title}</span>}
            </Link>
          ))}
        </nav>

        {/* Collapse button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="mt-4 w-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700/50"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <div className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span>Collapse</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}
