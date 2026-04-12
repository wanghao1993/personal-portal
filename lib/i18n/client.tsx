"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

type Messages = typeof en;

const translations: Record<string, Messages> = { en, zh };

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export function useI18n() {
  return useContext(I18nContext);
}

export function I18nProviderClient({
  locale: initialLocale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  const [locale, setLocale] = useState(initialLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale");
      if (saved && translations[saved]) {
        setLocale(saved);
      }
    }
  }, []);

  const handleSetLocale = (newLocale: string) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
      if (typeof window !== "undefined") {
        localStorage.setItem("locale", newLocale);
      }
    }
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split(".");
    let value: unknown = translations[locale] || translations.en;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    if (typeof value !== "string") return key;

    if (params) {
      return value.replace(/\{(\w+)\}/g, (_, paramKey) =>
        String(params[paramKey] ?? `{${paramKey}}`)
      );
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
