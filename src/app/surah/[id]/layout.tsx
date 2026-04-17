"use client";

import { useState } from "react";
import SettingsPanel from "@/src/components/SettingsPanel";
import SearchBar from "@/src/components/SearchBar";

export default function SurahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-80 bg-white border-r p-4">
        <SidebarContent />
      </aside>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="w-80 h-full bg-white p-4">
            <button onClick={() => setOpen(false)} className="mb-4">
              Close
            </button>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* MAIN */}
      <main className="flex-1">
        {/* top bar */}
        <div className="bg-white border-b p-4 flex justify-between md:hidden">
          <button onClick={() => setOpen(true)}>Menu</button>
          <h1 className="font-bold">Quran</h1>
        </div>

        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Quran App</h1>

      <SearchBar />
      <SettingsPanel />
    </div>
  );
}