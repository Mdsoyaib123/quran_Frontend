"use client";

import { api } from "@/src/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSettings } from "@/src/context/SettingsContext";
const fontMap: Record<string, string> = {
  Amiri: "var(--font-amiri)",
  Scheherazade: "var(--font-naskh)",
};

export default function SurahPage() {

  const params = useParams();
  const id = params?.id as string;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { arabicFont, arabicSize, translationSize } = useSettings();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await api.get(`/surah/${id}`);
        setData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch surah:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading...
      </div>
    );
  }

  if (!data) {
    return <div className="p-6">No data found</div>;
  }

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
              className="text-right"
              style={{
                fontFamily: fontMap[arabicFont],
                fontSize: arabicSize,
              }}
            >
              {verse.arabic}
            </p>

            <p style={{ fontSize: translationSize }}>
              {verse.verse}. {verse.translation}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}