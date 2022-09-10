import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { NewsFeed, NewsProps } from './news/index'
import { newsData } from '../utils/news-items'
import { Article } from '../interfaces'
import { GetStaticProps } from 'next/types'

const IndexPage = ({ items }: NewsProps): JSX.Element => (
  <Layout title="Home">
    <Hero />
    <section>
      <NewsFeed items={items} filter="release" limit={2} className="home-feed" />
    </section>
    <section>
      <NewsFeed items={items} filter="news" limit={6} className="home-feed" />
    </section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Article[] = newsData
  return { props: { items } }
}

export default IndexPage
