import { GetStaticProps, GetStaticPaths } from 'next'
import { List } from '../../components/List'
import { Content } from '../../interfaces'
import { newsData } from '../../utils/news-items'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { SITE_NAME } from '../../utils/common'
import Article from '../../components/Article'
import Section from '../../components/Section'

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
      <ListDetail item={item} />
      <Section>
        <List items={newsFeedItems} filter={item.type} limit={3} className="small" />
      </Section>
    </Layout>
  )
}

export default ListPage

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = newsData.map((item) => ({
    params: { id: item.id.toString() },
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
    const newsFeedItems: Content[] = newsData
    const id = params?.id
    const item = newsData.find((data) => data.id === Number(id))
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item, newsFeedItems } }
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    return { props: { errors: message } }
  }
}
