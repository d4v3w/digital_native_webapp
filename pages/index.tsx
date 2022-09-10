import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { NewsFeed, NewsProps } from './news/index'
import { newsData } from './news/news-items'
import { Article } from '../interfaces'
import { GetStaticProps } from 'next/types'

const IndexPage = ({ items }: NewsProps): JSX.Element => (
  <Layout title="Home">
    <Hero />
    <NewsFeed items={items} className="home-feed" />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Article[] = newsData
  return { props: { items } }
}

export default IndexPage
