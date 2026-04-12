"use client";

import { motion } from "framer-motion";
import { Code2, Bird, Mail, Heart, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";
import WeChatButton from "./wechat-button";

export default function Footer() {
  const { t, locale, setLocale } = useI18n();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Code2, href: "https://github.com", label: "GitHub" },
    { icon: Bird, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@ai-explorer.cn", label: "Email" },
    { icon: MessageCircle, href: "#", label: "WeChat" },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "zh" : "en";
    setLocale(newLocale);
  };

  return (
    <footer className="py-12 px-6 border-t border-[#DFE6E9]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Section */}
          <div className="flex flex-col gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "WeChat" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={link.label === "WeChat" ? undefined : { scale: 0.95 }}
                  onClick={link.label === "WeChat" ? (e) => { e.preventDefault(); } : undefined}
                  className="p-2 rounded-full bg-[#F5F5F0] text-[#636E72] hover:text-[#00B894] hover:bg-[#00B894]/10 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
              <WeChatButton />
            </div>

            {/* Copyright */}
            <p className="text-sm text-[#636E72]">
              {t("footer.copyright", { year: currentYear })}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:items-end gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#636E72]">{t("footer.language")}:</span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#DFE6E9] text-sm font-medium text-[#2D3436] hover:border-[#00B894] hover:text-[#00B894] transition-all duration-200"
              >
                <span>{locale === "en" ? "🇺🇸" : "🇨🇳"}</span>
                <span>{locale === "en" ? "English" : "中文"}</span>
              </button>
            </div>

            {/* Made With */}
            <p className="text-xs text-[#B2BEC3] flex items-center gap-1">
              {t("footer.madeWith").split("with")[0]} with{" "}
              <Heart size={12} className="text-[#E17055] fill-[#E17055]" />
              {t("footer.madeWith").split("with")[1] || ""}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
