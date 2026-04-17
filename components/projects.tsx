"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";

interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export default function Projects() {
  const { t, locale } = useI18n();

  // Get projects from translations
  const projects: Project[] = [
    {
      name: t("projects.items.0.name"),
      description: t("projects.items.0.description"),
      url: "https://linkhub.ai-explorer.cn",
      tags: ["Next.js", "AI", "SaaS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-white/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4"
            style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
          >
            {t("projects.title")}
          </h2>
          <p className="text-[#636E72] text-lg">{t("projects.subtitle")}</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-xl p-6 shadow-md border border-[#DFE6E9] hover:shadow-xl hover:border-[#00B894]/30 transition-all duration-300"
            >
              {/* Card Content */}
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00B894] to-[#00CEC9] flex items-center justify-center text-white text-xl font-bold">
                    {project.name.charAt(0)}
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-[#B2BEC3] group-hover:text-[#00B894] transition-colors"
                  />
                </div>

                <h3
                  className="text-xl font-bold text-[#2D3436] mb-2 group-hover:text-[#00B894] transition-colors"
                  style={{
                    fontFamily: "var(--font-clash), system-ui, sans-serif",
                  }}
                >
                  {project.name}
                </h3>

                <p className="text-[#636E72] text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[#F5F5F0] text-[#636E72] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00B894]/5 to-[#FDCB6E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
