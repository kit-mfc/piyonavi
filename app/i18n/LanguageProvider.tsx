"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "ja" | "en";

export const LANGUAGES: Language[] = ["ja", "en"];

const STORAGE_KEY = "piyonavi.lang";

export type TFunction = (ja: string, en: string) => string;

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TFunction;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as string[]).includes(value);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ja");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (isLanguage(stored)) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Language = prev === "ja" ? "en" : "ja";
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, next);
      }
      return next;
    });
  }, []);

  const t = useCallback<TFunction>((ja, en) => (lang === "ja" ? ja : en), [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useTranslation(): TFunction {
  return useLanguage().t;
}
