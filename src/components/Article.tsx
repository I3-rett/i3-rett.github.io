import { ArticleWithSlug } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";
import { Card } from "./Card";

export function Article({ article }: { article: ArticleWithSlug }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/articles/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article.date)}
                </Card.Eyebrow>
                <Card.Description>{article.description}</Card.Description>
                <Card.Description>
                    {article.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
                        >
                            {tag}
                        </span>
                    ))}
                </Card.Description>
                <Card.Cta>Read article</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article.date}
                className="mt-1 max-md:hidden"
            >
                {formatDate(article.date)}
            </Card.Eyebrow>
        </article>
    )
}