"use client";

import { createContext, useContext, useEffect, useState } from "react";

type SettingsType = {
  arabicFont: string;
  arabicSize: number;
  translationSize: number;
  setSettings: (data: Partial<SettingsType>) => void;
};

const defaultSettings: SettingsType = {
  arabicFont: "Amiri",
  arabicSize: 32,
  translationSize: 16,
  setSettings: () => {},
};

const SettingsContext = createContext<SettingsType>(defaultSettings);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettingsState] =
    useState<Omit<SettingsType, "setSettings">>(defaultSettings);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("quran-settings");
    if (saved) {
      setSettingsState(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("quran-settings", JSON.stringify(settings));
  }, [settings]);

  const setSettings = (data: Partial<SettingsType>) => {
    setSettingsState((prev) => ({ ...prev, ...data }));
  };

  return (
    <SettingsContext.Provider value={{ ...settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);