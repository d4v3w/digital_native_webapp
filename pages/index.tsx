import Layout from '../components/Layout'
import { List, ListProps } from '../components/List'
import { newsData } from '../utils/news-items'
import { Content } from '../interfaces'
import { GetStaticProps } from 'next/types'
import Section from '../components/Section'

const IndexPage = ({ items }: ListProps): JSX.Element => (
  <Layout title="Home" className="home">
    <Section className={'home'}>
      <List items={items} filter="news" limit={4} className="feed" />
    </Section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Content[] = newsData
  return { props: { items } }
}

export default IndexPage
