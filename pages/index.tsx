import { GetStaticProps } from 'next/types'
import Layout from '../components/Layout'
import { List, ListProps } from '../components/List'
import Section from '../components/Section'
import ContentfulApi from '../utils/ContentfulApi'

const IndexPage = ({ items }: ListProps): JSX.Element => (
  <Layout title="Home" className="home">
    <Section className={'home'}>
      <List items={items} className="feed" isStoryHidden={true} />
    </Section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  return await ContentfulApi.getPaginatedContent(['news', 'event', 'music'], 1)
}

export default IndexPage
