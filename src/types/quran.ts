export interface Surah {
  id: number;
  name_ar: string;
  name_en: string;
  verses_count: number;
}

export interface Verse {
  chapter: number;
  verse: number;
  arabic: string;
  translation: string;
}

export interface SingleSurahResponse {
  surah: Surah;
  verses: Verse[];
}