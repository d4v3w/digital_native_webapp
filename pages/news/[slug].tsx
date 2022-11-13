import { GetStaticPaths, GetStaticProps } from 'next'
import Article from '../../components/Article'
import Layout from '../../components/Layout'
import { List } from '../../components/List'
import ListDetail from '../../components/ListDetail'
import Section from '../../components/Section'
import { ApiResponse, Content } from '../../interfaces'
import { SITE_NAME } from '../../utils/common'
import ContentfulApi from '../../utils/ContentfulApi'

type NewsPageProps = {
  item?: Content
  newsFeedItems: Content[]
  errors?: string
}

const ListPage = ({ item, newsFeedItems, errors }: NewsPageProps) => {
  if (!item || errors) {
    return (
      <Layout title={`${SITE_NAME} | Oops that's an Error :(`}>
        <Article heading="Error">
          <p>
            <span style={{ color: 'red' }}> Oops that's an Error:</span>
          </p>
        </Article>
      </Layout>
    )
  }

  return (
    <Layout title={`${SITE_NAME} | ${item.title}`}>
      <ListDetail {...item} type="news" />
      <Section>
        <List items={newsFeedItems} className="small" />
      </Section>
    </Layout>
  )
}

export default ListPage

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const content: ApiResponse = await ContentfulApi.getPaginatedContent('news', 1)
  const items: Content[] = content.items ?? []

  const paths = items.map((item) => ({
    params: { slug: item.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const item: ApiResponse = await ContentfulApi.getContentBySlug(params?.slug)
    const content: ApiResponse = await ContentfulApi.getPaginatedContent('news', 1)
    const items: Content[] = content.items ?? []

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item, items } }
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    return { props: { errors: message } }
  }
}
