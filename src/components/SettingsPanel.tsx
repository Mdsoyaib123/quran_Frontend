"use client";

import { useSettings } from "@/src/context/SettingsContext";

export default function SettingsPanel() {
  const { arabicFont, arabicSize, translationSize, setSettings } =
    useSettings();

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Settings</h2>

      <select
        value={arabicFont}
        onChange={(e) =>
          setSettings({ arabicFont: e.target.value as any })
        }
        className="border p-2 w-full rounded"
      >
        <option value="Amiri">Amiri</option>
        <option value="Noto">Noto Naskh</option>
      </select>

      <div>
        <label>Arabic Size: {arabicSize}</label>
        <input
          type="range"
          min="20"
          max="60"
          value={arabicSize}
          onChange={(e) =>
            setSettings({ arabicSize: Number(e.target.value) })
          }
          className="w-full"
        />
      </div>

      <div>
        <label>Translation Size: {translationSize}</label>
        <input
          type="range"
          min="12"
          max="24"
          value={translationSize}
          onChange={(e) =>
            setSettings({ translationSize: Number(e.target.value) })
          }
          className="w-full"
        />
      </div>
    </div>
  );
}