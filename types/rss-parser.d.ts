declare module "rss-parser" {
  interface Item {
    title?: string;
    link?: string;
    pubDate?: string;
    isoDate?: string;
    content?: string;
    contentSnippet?: string;
    guid?: string;
    categories?: string[];
  }

  interface Feed {
    items: Item[];
    title?: string;
    description?: string;
    link?: string;
  }

  interface ParserOptions {
    timeout?: number;
    headers?: Record<string, string>;
    customFields?: {
      item?: string[];
      feed?: string[];
    };
  }

  class Parser {
    constructor(options?: ParserOptions);
    parseURL(url: string): Promise<Feed>;
    parseString(xml: string): Promise<Feed>;
  }

  export default Parser;
}
