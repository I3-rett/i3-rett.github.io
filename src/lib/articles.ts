import fs from 'fs'
import dynamic from 'next/dynamic'
import path from 'path'

interface Article {
  metadata: {
    title: string
    description: string
    author: string
    date: string
    tags: string[]
  },
  MDXContent: React.ComponentType<{ [key: string]: unknown }>
}

export interface ArticleWithSlug extends Article {
  slug: string
}

export function getAllArticlesSlugs(): string[] {
  const articles = fs.readdirSync(path.join("src", "app", "_content"));
  const mdxFiles = articles.filter((filename) => filename.endsWith(".mdx"));
  const slugs = mdxFiles.map((filename) => filename.replace(".mdx", ""));
  return slugs;
}

async function getArticle({ slug }: { slug: string }): Promise<ArticleWithSlug> {
  try {
    const mdxPath = path.join("src", "app", "_content", `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      throw new Error(`MDX file for slug ${slug} does not exist`);
    }

    const { metadata } = await import(`@/app/_content/${slug}.mdx`);
    const MDXContent = dynamic(() => import(`@/app/_content/${slug}.mdx`));
    return {
      slug,
      metadata: metadata,
      MDXContent: MDXContent,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  const slugs = getAllArticlesSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      return await getArticle({ slug });
    }),
  );
  return articles;
}
