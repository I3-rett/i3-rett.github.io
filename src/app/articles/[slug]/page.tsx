import fs from "node:fs";
import path from "node:path";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { getArticle } from "@/lib/articles";
import { ArticleLayout } from "@/components/ArticleLayout";

export const dynamic = 'force-static'; // optional, for clarity

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const article = await getArticle(params);
    return {
        title: article.metadata.title,
        description: article.metadata.description,
    };
}
export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("src", "app", "articles", "_mdx"));
    const params = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const article = await getArticle({ slug });

    return <ArticleLayout article={article} />;
}
