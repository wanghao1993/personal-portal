import { I18nProviderClient } from "@/lib/i18n/client";

export async function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = "en"; // Default locale
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
