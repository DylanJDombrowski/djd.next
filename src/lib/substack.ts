// src/lib/substack.ts
import Parser from "rss-parser";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  content: string;
  guid: string;
}

const parser = new Parser();

const SUBSTACK_RSS_URL = "https://dylandombro.substack.com/feed";
const UTM_PARAMS = "?utm_source=dylanjdombrowski&utm_medium=website&utm_campaign=blog-feed";

export async function getSubstackPosts(limit: number = 3): Promise<SubstackPost[]> {
  try {
    const feed = await parser.parseURL(SUBSTACK_RSS_URL);

    const posts: SubstackPost[] = feed.items
      .slice(0, limit)
      .map((item) => ({
        title: item.title || "",
        link: `${item.link}${UTM_PARAMS}`,
        pubDate: item.pubDate || "",
        contentSnippet: item.contentSnippet || "",
        content: item.content || "",
        guid: item.guid || item.link || "",
      }));

    return posts;
  } catch (error) {
    console.error("Error fetching Substack posts:", error);
    return [];
  }
}
