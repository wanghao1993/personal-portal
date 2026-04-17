import Parser from "rss-parser";
import { RSS_SOURCES, NewsItem } from "./sources";

const parser = new Parser({
  timeout: 10000,
  headers: {
    "User-Agent": "AI-Explorer-News-Bot/1.0",
  },
});

export async function fetchAllFeeds(): Promise<NewsItem[]> {
  const results = await Promise.allSettled(
    RSS_SOURCES.map(async (source) => {
      try {
        const feed = await parser.parseURL(source.url);
        return feed.items.slice(0, 5).map((item) => ({
          id: `${source.name}-${item.link?.slice(-20) || Date.now()}`,
          title: item.title || "Untitled",
          link: item.link || "",
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          source: source.name,
          locale: source.locale,
        }));
      } catch {
        console.error(`Failed to fetch ${source.name}`);
        return [];
      }
    })
  );

  const items = results
    .filter((r): r is PromiseFulfilledResult<NewsItem[]> => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 15);

  return items;
}
