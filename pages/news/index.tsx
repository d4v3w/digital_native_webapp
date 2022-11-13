import classNames from 'classnames'
import { GetStaticProps } from 'next/types'
import Article from '../../components/Article'
import Layout from '../../components/Layout'
import { List, ListProps } from '../../components/List'
import { ApiResponse, Content } from '../../interfaces'
import ContentfulApi from '../../utils/ContentfulApi'

const NewsPage = ({ items, total, className = '' }: ListProps) => (
  <Layout title="News" className="news">
    <Article heading="Digital Native News" className={classNames(className)}>
      <List items={items} total={total} className="rows" isImageHidden={true} isStoryHidden={true} />
    </Article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const content: ApiResponse = await ContentfulApi.getPaginatedContent('news', 1)
  const items: Content[] = content.items ?? []
  const total = content.total
  return { props: { items, total } }
}

export default NewsPage
