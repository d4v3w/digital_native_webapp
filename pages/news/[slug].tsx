import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import { List } from '../../components/List'
import ListDetail from '../../components/ListDetail'
import Section from '../../components/Section'
import { Content, Media } from '../../interfaces'
import { SITE_NAME } from '../../utils/common'
import ContentfulApi from '../../utils/ContentfulApi'

type ArticlePageProps = {
  item: Content
  media: Array<Media>
  items: Content[]
  errors?: string
  type: string
}

const ArticlePage = ({ item, media, items, type }: ArticlePageProps) => {
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
      <ListDetail item={item} media={media} />
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
  const item = singleItem.props.item
  const media = item.media
  const type = item ? item.type : null

  // Get related items by type
  const items = await ContentfulApi.getPaginatedContent(type, 1)

  return {
    props: {
      item: item,
      media: media,
      items: items.props.items,
      type: type,
    },
  }
}

export default ArticlePage
