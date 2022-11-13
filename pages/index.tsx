import { GetStaticProps } from 'next/types'
import Layout from '../components/Layout'
import { List, ListProps } from '../components/List'
import Section from '../components/Section'
import { ApiResponse, Content } from '../interfaces'
import ContentfulApi from '../utils/ContentfulApi'

const IndexPage = ({ items }: ListProps): JSX.Element => (
  <Layout title="Home" className="home">
    <Section className={'home'}>
      <List items={items} className="feed" isStoryHidden={true} />
    </Section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const content: ApiResponse = await ContentfulApi.getPaginatedContent('news', 1)
  const items: Content[] = content.items ?? []
  const total = content.total
  return { props: { items, total } }
}

export default IndexPage
