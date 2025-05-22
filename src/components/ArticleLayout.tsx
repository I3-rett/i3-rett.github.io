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
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
