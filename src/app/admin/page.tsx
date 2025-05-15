"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { setAdminKey } from "@/lib/adminAuth";
import { toast } from "sonner";
import { Lock, CheckCircle } from "lucide-react";

export default function Admin() {
  const [accessKey, setAccessKey] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (setAdminKey(accessKey)) {
      toast.success("Access granted", {
        description: "You have successfully logged in to the admin panel.",
        duration: 3000,
        className: "bg-white text-black dark:bg-zinc-900 dark:text-white",
      });
      window.location.reload();
    } else {
      toast.error("Invalid access key", {
        description: "Please check your access key and try again.",
        duration: 3000,
        className: "bg-white text-black dark:bg-zinc-900 dark:text-white",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black text-white">
        <div className="w-full max-w-md p-8 space-y-8 bg-zinc-900 rounded-xl shadow-lg border border-zinc-800">
          <div className="text-center">
            <Lock className="w-12 h-12 mx-auto mb-4 text-white" />
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
            <p className="mt-2 text-zinc-400">Enter your access key to continue</p>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="accessKey" className="block text-sm font-medium text-zinc-300">
                Access Key
              </label>
              <input
                id="accessKey"
                name="accessKey"
                type="password"
                required
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="Enter access key"
              />
            </div>
                      
            <Button 
              type="submit" 
              className="w-full bg-white hover:bg-zinc-200 text-black font-medium"
            >
              Access Admin Panel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
