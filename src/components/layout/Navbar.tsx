
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, User, ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const isLoggedIn = !!user;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/41217314-6243-4374-8809-0575fad6f2aa.png" alt="ClearSpend Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">ClearSpend</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[200px] bg-white p-2">
                  <Link to="/guide" className="block p-2 hover:bg-gray-50 rounded-md">
                    Budgeting Guide
                  </Link>
                  <Link to="/investments" className="block p-2 hover:bg-gray-50 rounded-md">
                    Investment Basics
                  </Link>
                  <Link to="/faq" className="block p-2 hover:bg-gray-50 rounded-md">
                    FAQ
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full" onClick={handleSignOut}>
                <User className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </>
          )}
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
