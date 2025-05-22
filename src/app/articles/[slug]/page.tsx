import { getAllArticlesSlugs } from "@/lib/articles"

export function generateStaticParams() {  // Remove async if not needed
    const slugs = getAllArticlesSlugs();
    return slugs.map((slug: string) => ({
        slug: slug
    }));
}
export default async function Page({
    params,
}: {
    params: { slug: string }  // This should also be an object, not a string
}) {
    const { default: Article } = await import(`@/app/_content/${params.slug}.mdx`)

    return <Article />
}

export const dynamicParams = false