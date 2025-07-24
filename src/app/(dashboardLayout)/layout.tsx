// src/app/dashboard/layout.tsx

import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <DashboardSidebar />

      <div className="flex-1 md:flex-col bg-gray-50">
        {/* Header */}
        <DashboardHeader />

        {/* Page content */}
        <main className="">{children}</main>
      </div>
    </div>
  );
}
