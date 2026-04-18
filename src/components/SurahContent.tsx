"use client";

import { useSettings } from "@/src/context/SettingsContext";

const fontMap: Record<string, string> = {
    Amiri: "var(--font-amiri)",
    Noto: "var(--font-naskh)",
};

export default function SurahContent({ data }: { data: any }) {
    const { arabicFont, arabicSize, translationSize } = useSettings();

    return (
        <main className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">
                {data.surah.name_en} - {data.surah.name_ar}
            </h1>

            <div className="space-y-6">
                {data.verses.map((verse: any) => (
                    <div
                        key={verse.verse}
                        className="bg-white p-4 rounded-xl shadow"
                    >
                        <p
                            className="text-right leading-loose"
                            style={{
                                fontFamily: fontMap[arabicFont] || "serif",
                                fontSize: `${arabicSize}px`,
                            }}
                        >
                            {verse.arabic}
                        </p>

                        <p
                            className="mt-3 text-gray-700"
                            style={{
                                fontSize: `${translationSize}px`,
                            }}
                        >
                            {verse.verse}. {verse.translation}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}