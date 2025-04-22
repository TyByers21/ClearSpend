
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Search, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="h-16 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between h-full px-6">
        {/* Search */}
        <div className="relative w-96 max-w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search transactions, accounts..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="py-4">
                <h3 className="text-lg font-medium mb-4">Notifications</h3>
                <div className="space-y-4">
                  <div className="bg-finance-light/40 p-3 rounded-lg">
                    <h4 className="font-medium">Bill Payment Due</h4>
                    <p className="text-sm text-gray-600">Credit Card payment of $350 due in 3 days</p>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                  <div className="bg-finance-light/40 p-3 rounded-lg">
                    <h4 className="font-medium">Budget Alert</h4>
                    <p className="text-sm text-gray-600">Dining budget at 85% with 10 days remaining</p>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" variant="outline">Check Budget</Button>
                    </div>
                  </div>
                  <div className="bg-finance-light/40 p-3 rounded-lg">
                    <h4 className="font-medium">New Feature</h4>
                    <p className="text-sm text-gray-600">Try our new investment tracking dashboard</p>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" variant="outline">Explore</Button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to="/logout">
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
