export interface NewsSource {
  name: string;
  url: string;
  locale: "en" | "zh";
}

export const RSS_SOURCES: NewsSource[] = [
  // English sources
  {
    name: "OpenAI",
    url: "https://openai.com/blog/rss.xml",
    locale: "en",
  },
  {
    name: "Anthropic",
    url: "https://www.anthropic.com/news/rss.xml",
    locale: "en",
  },
  {
    name: "MIT Tech Review AI",
    url: "https://www.technologyreview.com/feed/",
    locale: "en",
  },
  {
    name: "Google DeepMind",
    url: "https://deepmind.google/discover/blog/",
    locale: "en",
  },
  {
    name: "TechCrunch AI",
    url: "https://techcrunch.com/tag/artificial-intelligence/feed/",
    locale: "en",
  },
  {
    name: "VentureBeat AI",
    url: "https://venturebeat.com/category/ai/feed/",
    locale: "en",
  },
  {
    name: "The Verge AI",
    url: "https://www.theverge.com/ai-artificial-intelligence/rss/index.xml",
    locale: "en",
  },
  {
    name: "Hugging Face Blog",
    url: "https://huggingface.co/blog/feed.xml",
    locale: "en",
  },
  {
    name: "Stability AI",
    url: "https://stability.ai/news/rss.xml",
    locale: "en",
  },
  {
    name: "AWS Machine Learning",
    url: "https://aws.amazon.com/blogs/machine-learning/feed/",
    locale: "en",
  },
  // Chinese sources
  {
    name: "机器之心",
    url: "https://www.jiqizhixin.com/rss",
    locale: "zh",
  },
  {
    name: "量子位",
    url: "https://www.qbitai.com/feed",
    locale: "zh",
  },
  {
    name: "新智元",
    url: "https://www.jqr.com/rss",
    locale: "zh",
  },
  {
    name: "AI科技评论",
    url: "https://www.leiphone.com/rss/category/AI",
    locale: "zh",
  },
  {
    name: "InfoQ AI",
    url: "https://www.infoq.cn/feed/category/ai",
    locale: "zh",
  },
  {
    name: "腾讯新闻 AI",
    url: "https://news.qq.com/rss/ai.xml",
    locale: "zh",
  },
];

export interface NewsItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  source: string;
  locale: "en" | "zh";
}
