"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BlogPreview() {
  const { t } = useI18n();

  // Blog posts from translations
  const posts: BlogPost[] = [
    {
      title: t("blog.posts.0.title"),
      excerpt: t("blog.posts.0.excerpt"),
      date: t("blog.posts.0.date"),
      readTime: t("blog.posts.0.readTime"),
    },
    {
      title: t("blog.posts.1.title"),
      excerpt: t("blog.posts.1.excerpt"),
      date: t("blog.posts.1.date"),
      readTime: t("blog.posts.1.readTime"),
    },
    {
      title: t("blog.posts.2.title"),
      excerpt: t("blog.posts.2.excerpt"),
      date: t("blog.posts.2.date"),
      readTime: t("blog.posts.2.readTime"),
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
    <section id="blog" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4"
              style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
            >
              {t("blog.title")}
            </h2>
            <p className="text-[#636E72] text-lg">{t("blog.subtitle")}</p>
          </div>
          <motion.a
            href="https://blog.ai-explorer.cn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#00B894] font-semibold hover:text-[#00A885] transition-colors"
          >
            {t("blog.visitBlog")}
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group"
            >
              <a
                href={`https://blog.ai-explorer.cn`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#DFE6E9] hover:shadow-xl hover:border-[#00B894]/30 transition-all duration-300 h-full flex flex-col">
                  {/* Post Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-[#FDCB6E]/20 to-[#E17055]/20 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-lg font-bold text-[#2D3436] mb-2 group-hover:text-[#00B894] transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-[#636E72] text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Post Meta */}
                    <div className="flex items-center gap-4 text-xs text-[#B2BEC3]">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
