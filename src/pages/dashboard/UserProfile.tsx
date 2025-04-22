
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/use-toast";
import { User } from "lucide-react";

export default function UserProfile() {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSave = () => {
    // Would typically save to database here
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <DashboardLayout title="User Profile" description="Manage your personal information">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader className="pb-0">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-blue-600/20 flex items-center justify-center mb-4 animate-pulse">
                <User className="h-12 w-12 text-blue-400" />
              </div>
              <CardTitle className="text-white text-center">{user?.email}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center pt-4">
            <p className="text-gray-300">Member since {new Date().toLocaleDateString()}</p>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input 
                  id="email" 
                  value={user?.email || ""} 
                  disabled
                  className="bg-slate-700 border-slate-600 text-white opacity-70"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-gray-300">Bio</Label>
                <Input 
                  id="bio" 
                  value={bio} 
                  onChange={(e) => setBio(e.target.value)} 
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="Tell us about yourself"
                />
              </div>
              
              <Button 
                onClick={handleSave}
                type="button"
                className="mt-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
