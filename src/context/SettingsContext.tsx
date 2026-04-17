"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Settings = {
  arabicFont: "Amiri" | "Noto";
  arabicSize: number;
  translationSize: number;
};

const SettingsContext = createContext<any>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    arabicFont: "Amiri",
    arabicSize: 36,
    translationSize: 16,
  });

  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ ...settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);