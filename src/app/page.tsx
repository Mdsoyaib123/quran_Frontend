import Link from "next/link";
import { Surah } from "../types/quran";

async function getSurahs(): Promise<Surah[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/surahs`,
    {
      cache: "force-cache", // ✅ SSG enabled
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch surahs");
  }

  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const surahs = await getSurahs();

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Surahs</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {surahs.map((surah) => (
          <Link
            key={surah.id}
            href={`/surah/${surah.id}`}
            className="p-4 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">
                  {surah.id}. {surah.name_en}
                </p>

                <p className="text-sm text-gray-500">
                  {surah.verses_count} verses
                </p>
              </div>

              <p className="text-2xl">{surah.name_ar}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}