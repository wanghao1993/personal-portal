"use client";

import { motion } from "framer-motion";
import { Newspaper, ExternalLink, Clock, RefreshCw } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";
import { useState, useEffect, useCallback } from "react";

interface NewsItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  source: string;
  locale: "en" | "zh";
}

function formatTimeAgo(dateString: string, locale: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return locale === "zh" ? `${diffDays}天前` : `${diffDays}d ago`;
  }
  if (diffHours > 0) {
    return locale === "zh" ? `${diffHours}小时前` : `${diffHours}h ago`;
  }
  return locale === "zh" ? "刚刚" : "Just now";
}

export default function AiNewsSection() {
  const { t, locale } = useI18n();
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNews = useCallback(async () => {
    try {
      const res = await fetch("/api/ai-news");
      const data = await res.json();
      setItems(data.items || []);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <section id="ai-news" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤖</span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#2D3436]"
                style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
              >
                {t("aiNews.title")}
              </h2>
            </div>
            <button
              onClick={fetchNews}
              className="p-2 rounded-lg hover:bg-[#00B894]/10 transition-colors"
              title={locale === "zh" ? "刷新" : "Refresh"}
            >
              <RefreshCw size={20} className="text-[#636E72]" />
            </button>
          </div>
          <p className="text-[#636E72] text-lg">{t("aiNews.subtitle")}</p>
        </motion.div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse bg-[#DFE6E9] rounded-xl h-16" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 text-[#636E72]">
            <Newspaper size={48} className="mx-auto mb-4 opacity-50" />
            <p>{t("aiNews.error")}</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {items.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#DFE6E9] hover:border-[#00B894]/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#00B894]/10 text-[#00B894]">
                      {item.source}
                    </span>
                    <span className="text-xs text-[#B2BEC3] flex items-center gap-1">
                      <Clock size={12} />
                      {formatTimeAgo(item.pubDate, locale)}
                    </span>
                  </div>
                  <h3 className="text-[#2D3436] font-medium truncate group-hover:text-[#00B894] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <ExternalLink size={16} className="text-[#B2BEC3] group-hover:text-[#00B894] transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
