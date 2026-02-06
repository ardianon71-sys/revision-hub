import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function Layout() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex flex-1">
        <AppSidebar open={sidebarOpen} onClose={() => isMobile && setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
