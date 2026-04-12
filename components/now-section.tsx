"use client";

import { motion } from "framer-motion";
import { Zap, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";

export default function NowSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">✨</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D3436]"
              style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
            >
              {t("now.title")}
            </h2>
          </div>
          <p className="text-[#636E72] text-lg">{t("now.subtitle")}</p>
        </motion.div>

        {/* Current Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B894] to-[#FDCB6E] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#DFE6E9] hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00B894]/10 text-[#00B894] text-sm font-medium">
                      <Zap size={14} />
                      {t("now.currentProject.status")}
                    </span>
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-4"
                    style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
                  >
                    {t("now.currentProject.name")}
                  </h3>
                  <p className="text-[#636E72] text-lg leading-relaxed mb-6">
                    {t("now.currentProject.description")}
                  </p>
                  <motion.a
                    href="https://linkbhub.ai-explorer.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-[#00B894] font-semibold hover:text-[#00A885] transition-colors"
                  >
                    {t("now.currentProject.link")}
                    <ExternalLink size={18} />
                  </motion.a>
                </div>

                {/* Decorative Element */}
                <div className="hidden md:block w-48 h-32 rounded-xl bg-gradient-to-br from-[#00B894]/10 to-[#FDCB6E]/10 flex items-center justify-center">
                  <div className="text-6xl">🔗</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
