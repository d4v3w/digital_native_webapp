import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import { List } from '../../components/List'
import ListDetail from '../../components/ListDetail'
import Section from '../../components/Section'
import { Content } from '../../interfaces'
import { SITE_NAME } from '../../utils/common'
import ContentfulApi from '../../utils/ContentfulApi'

type ArticlePageProps = {
  item: Content
  items: Content[]
  errors?: string
  type: string
}

const ArticlePage = ({ item, items, type }: ArticlePageProps) => {
  const isHeadingHidden = false
  const isImageHidden = false
  const isSummaryHidden = false
  let isStoryHidden = false

  switch (type) {
    case 'music':
      isStoryHidden = true
      break
  }

  console.log(`TYPE: ${type}`)

  return (
    <Layout title={`${SITE_NAME} | ${item.title}`}>
      <ListDetail {...item} type={type} />
      <Section className={'news'}>
        <List
          items={items}
          isHeadingHidden={isHeadingHidden}
          isImageHidden={isImageHidden}
          isSummaryHidden={isSummaryHidden}
          isStoryHidden={isStoryHidden}
          className="small"
        />
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const singleItem = await ContentfulApi.getContentBySlug(params?.slug)
  const item = singleItem.props.items[0]
  const type = item.type.name

  // Get related items by type
  const items = await ContentfulApi.getPaginatedContent(type, 1)

  return {
    props: {
      item: item,
      items: items.props.items,
      type: type,
    },
  }
}

export default ArticlePage
