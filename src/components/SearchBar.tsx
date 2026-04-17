"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const params = useParams();
  const surahId = params?.id as string; // dynamic route = /surah/[id]

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const url = `${process.env.NEXT_PUBLIC_API_URL}/search?q=${encodeURIComponent(
        query
      )}&surahId=${encodeURIComponent(surahId)}`;

      const res = await fetch(url);

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      setResults(data.data || []);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search ayah in this surah..."
          className="w-full border rounded px-3 py-2"
        />

        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-sm text-gray-500">Searching...</p>
      )}

      <div className="space-y-2">
        {results.map((item, index) => (
          <div
            key={index}
            className="p-3 border rounded bg-white"
          >
            <p className="text-sm">{item.translation}</p>

            <p className="text-xs text-gray-500 mt-1">
              Surah {item.surah_id}, Ayah {item.verse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}