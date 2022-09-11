import { GetStaticProps, GetStaticPaths } from 'next'
import { NewsFeed } from '../../components/NewsFeed'
import { Article } from '../../interfaces'
import { newsData } from '../../utils/news-items'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { SITE_NAME } from '../../utils/common'

type NewsArticleProps = {
  item?: Article
  newsFeedItems: Article[]
  errors?: string
}

const StaticPropsDetail = ({ item, newsFeedItems, errors }: NewsArticleProps) => {
  if (!item || errors) {
    return (
      <Layout title="Error | Digital Native (UK)">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${item ? item.title : 'News'} | ${SITE_NAME}`}>
      <ListDetail item={item} />

      <section>
        <NewsFeed items={newsFeedItems} filter="release" limit={2} className="home-release-feed" />
      </section>
    </Layout>
  )
}

export default StaticPropsDetail

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
    const newsFeedItems: Article[] = newsData
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
