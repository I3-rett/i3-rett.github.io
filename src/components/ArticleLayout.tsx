import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

export default async function ArticleLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Container className="mt-8 lg:mt-8">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl flex">
          <article>
            <Prose className="mt-8 prose-h2:mt-0 prose-h3:mt-0" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
