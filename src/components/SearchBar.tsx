"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?q=${encodeURIComponent(query)}`
      );

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      setResults(data.data || []);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          className="border p-2 w-full rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search ayah..."
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Searching...</p>}

      <div className="space-y-2">
        {results.map((item, i) => (
          <div key={i} className="p-3 bg-white border rounded">
            <p className="text-sm">{item.translation}</p>
            <p className="text-xs text-gray-500">
              Surah {item.chapter}, Ayah {item.verse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}