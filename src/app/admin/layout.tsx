"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { checkAdminAccess, clearAdminAccess } from "@/lib/adminAuth";
import { toast } from "sonner";
import { 
  LogOut, FileText, BookOpen, Home
} from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const hasAccess = checkAdminAccess();
    setIsAuthorized(hasAccess);
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    clearAdminAccess();
    setIsAuthorized(false);
    toast.success("Logged out", {
      description: "You have successfully logged out of the admin panel.",
      duration: 3000,
      className: "bg-white text-black dark:bg-zinc-900 dark:text-white",
    });
    window.location.href = "/admin";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <div 
              key={index}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: '0.6s'
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    if (typeof window !== "undefined" && window.location.pathname !== "/admin") {
      window.location.href = "/admin";
      return null;
    }
    return <>{children}</>;
  }
  
  if (typeof window !== "undefined" && window.location.pathname === "/admin") {
    window.location.href = "/admin/dashboard";
    return null;
  }

  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-black">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-10">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-xl font-bold">Mơ Hỏi Mở 2025</h1>
        </div>
        
        <nav className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-zinc-500 uppercase font-semibold">General</p>
            <a href='/admin/dashboard' className="flex items-center gap-3 text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="/admin/dashboard/funding" className="flex items-center gap-3 text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <FileText className="w-5 h-5" />
              <span>Funding</span>
            </a>
            {/* <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <Users className="w-5 h-5" />
              <span>Authors</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a> */}
          </div>
        </nav>
        
        <div className="absolute bottom-6 left-6">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black text-white p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          <h1 className="font-bold">HoiSach Admin</h1>
        </div>
        <div className="flex items-center gap-2">
          <a href="/admin/dashboard" className="p-2 rounded-md hover:bg-zinc-800">
            <Home className="w-5 h-5" />
          </a>
          <Button 
            onClick={handleLogout}
            variant="ghost" 
            className="text-white hover:bg-zinc-800"
            size="icon"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
        {children}
      </main>
    </div>
  );
}