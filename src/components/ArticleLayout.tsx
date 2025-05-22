import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

export async function ArticleLayout({
  article
}: {
  article: ArticleWithSlug
}) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {article.metadata.title}
              </h1>
              {article.metadata.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {article.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <time
                dateTime={article.metadata.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.metadata.date)}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              <article.MDXContent />
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
