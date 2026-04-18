import SurahContent from "@/src/components/SurahContent";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fontMap: Record<string, string> = {
  Amiri: "var(--font-amiri)",
  Scheherazade: "var(--font-naskh)",
};

// ✅ Generate static params
export async function generateStaticParams() {
  const res = await fetch(`${BASE_URL}/surahs`, {
    cache: "force-cache",
  });

  const json = await res.json();

  return json.data.map((surah: any) => ({
    id: surah.id.toString(),
  }));
}

// ✅ Fetch single surah
async function getSurah(id: string) {
  const res = await fetch(`${BASE_URL}/surah/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch surah");
  }

  const json = await res.json();
  return json.data;
}


export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getSurah(id);

  return <SurahContent data={data} />;
}