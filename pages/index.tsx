import Layout from '../components/Layout'
import { NewsFeed, NewsFeedProps } from '../components/NewsFeed'
import { newsData } from '../utils/news-items'
import { Content } from '../interfaces'
import { GetStaticProps } from 'next/types'
import Section from '../components/Section'

const IndexPage = ({ items }: NewsFeedProps): JSX.Element => (
  <Layout title="Home" className="home">
    <Section className={'home'}>
      <NewsFeed items={items} filter="release" limit={2} className="home-release-feed" />
    </Section>
    <Section className={'home'}>
      <NewsFeed items={items} filter="news" limit={6} className="home-news-feed" />
    </Section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Content[] = newsData
  return { props: { items } }
}

export default IndexPage
