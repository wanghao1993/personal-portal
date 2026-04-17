"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useI18n } from "@/lib/i18n/client";

const NAV_ITEMS = [
  { id: "hero", key: "nav.home" },
  { id: "now", key: "nav.now" },
  { id: "ai-news", key: "nav.aiNews" },
  { id: "projects", key: "nav.projects" },
  { id: "blog", key: "nav.blog" },
] as const;

export default function Navbar() {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<string>("hero");
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y < 100) {
      setVisible(true);
    } else if (y > lastY && y > 200) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastY(y);
  });

  const detectActiveSection = useCallback(() => {
    const sections = NAV_ITEMS.map((item) => ({
      id: item.id,
      el: document.getElementById(item.id),
    })).filter((s) => s.el);

    const scrollPos = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = sections[i].el!;
      if (el.offsetTop <= scrollPos) {
        setActiveId(sections[i].id);
        return;
      }
    }
    setActiveId("hero");
  }, []);

  useEffect(() => {
    detectActiveSection();
    window.addEventListener("scroll", detectActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", detectActiveSection);
  }, [detectActiveSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <nav
        className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-white/40 shadow-lg shadow-black/[0.03]"
        style={{
          background: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive ? "#00B894" : "#636E72",
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(0, 184, 148, 0.1)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{t(item.key)}</span>
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}
