import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import { List } from '../../components/List'
import ListDetail from '../../components/ListDetail'
import Section from '../../components/Section'
import { Content } from '../../interfaces/Content'
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const singleItem = await ContentfulApi.getContentBySlug(context.params?.slug)

  console.log('singleItem')
  console.log(singleItem)
  const item = singleItem.props.items.at(0) || undefined
  const type = item ? item.type : null

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
