import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { fetchAllFeeds } from "@/lib/ai-news/fetcher";
import { NewsItem } from "@/lib/ai-news/sources";

const CACHE_KEY = "ai-news:latest";
const CACHE_TTL = 60;

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function GET() {
  const redis = getRedis();

  try {
    if (redis) {
      const cached = await redis.get<NewsItem[]>(CACHE_KEY);
      if (cached) {
        return NextResponse.json({ items: cached, cached: true });
      }
    }

    const items = await fetchAllFeeds();

    if (redis) {
      await redis.set(CACHE_KEY, items, { ex: CACHE_TTL });
    }

    return NextResponse.json({ items, cached: false });
  } catch (error) {
    console.error("AI news fetch error:", error);
    return NextResponse.json(
      { items: [], error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();

  try {
    const items = await fetchAllFeeds();

    if (redis) {
      await redis.set(CACHE_KEY, items, { ex: CACHE_TTL });
    }

    return NextResponse.json({ success: true, count: items.length });
  } catch (error) {
    console.error("Cron job error:", error);
    return NextResponse.json(
      { error: "Failed to refresh news" },
      { status: 500 },
    );
  }
}
