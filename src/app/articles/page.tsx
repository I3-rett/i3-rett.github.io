import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Article } from '@/components/Article';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    "All of my long-form thoughts on my experiences, projects and more, collected in chronological order.",
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles();

  return (
    <SimpleLayout
      title="My thoughts, exactly !"
      intro="All of my long-form thoughts on my experiences, projects and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.sort((a, b) => {
            return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
          }).map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
