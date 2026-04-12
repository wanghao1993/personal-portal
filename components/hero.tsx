"use client";

import { motion } from "framer-motion";
import { Code2, Bird, Mail, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";
import WeChatButton from "./wechat-button";

export default function Hero() {
  const { t } = useI18n();

  const socialLinks = [
    { icon: Code2, href: "https://github.com/wanghao1993", label: "GitHub" },
    { icon: Bird, href: "https://twitter.com/flowers_Z_z", label: "Twitter" },
    { icon: Mail, href: "mailto:whao53333@gmail.com", label: "Email" },
  ];

  const WeChatIcon = MessageCircle;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#00B894] to-[#00CEC9] p-1"
        >
          <div className="w-full h-full rounded-full bg-[#F5F5F0] flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold text-[#2D3436]">
              IW
            </span>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#636E72] text-lg md:text-xl mb-2"
        >
          {t("hero.greeting")}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
        >
          <span className="text-[#2D3436]">{t("hero.name")}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-[#00B894] font-semibold mb-6"
        >
          {t("hero.title")}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[#636E72] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          {t("hero.description")}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white shadow-md text-[#2D3436] hover:text-[#00B894] hover:shadow-lg transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon size={22} />
            </motion.a>
          ))}
          <WeChatButton />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-[#B2BEC3] flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#00B894]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
