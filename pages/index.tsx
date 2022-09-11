import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { NewsFeed, NewsFeedProps } from '../components/NewsFeed'
import { newsData } from '../utils/news-items'
import { Article } from '../interfaces'
import { GetStaticProps } from 'next/types'

const IndexPage = ({ items }: NewsFeedProps): JSX.Element => (
  <Layout title="Home">
    <Hero />
    <main>
      <section>
        <NewsFeed items={items} filter="release" limit={2} className="home-release-feed" />
      </section>
      <section>
        <NewsFeed items={items} filter="news" limit={6} className="home-news-feed" />
      </section>
    </main>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Article[] = newsData
  return { props: { items } }
}

export default IndexPage
