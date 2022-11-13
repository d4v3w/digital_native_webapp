import classNames from 'classnames'
import { GetStaticProps } from 'next/types'
import Article from '../../components/Article'
import Layout from '../../components/Layout'
import { List, ListProps } from '../../components/List'
import { Content } from '../../interfaces'
import ContentfulApi from '../../utils/ContentfulApi'

const NewsPage = ({ items, className = '' }: ListProps) => (
  <Layout title="News" className="news">
    <Article heading="Digital Native News" className={classNames(className)}>
      <List items={items} filter="news" order="desc" className="rows" isImageHidden={true} />
    </Article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const content = await ContentfulApi.getPaginatedContent('news', 1)
  const items: Content[] = content.items ?? []
  return { props: { items } }
}

export default NewsPage
