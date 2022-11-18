import classNames from 'classnames'
import { GetStaticProps } from 'next/types'
import Article from '../../components/Article'
import Layout from '../../components/Layout'
import { List, ListProps } from '../../components/List'
import ContentfulApi from '../../utils/ContentfulApi'

const NewsPage = ({ items, className = '' }: ListProps) => (
  <Layout title="News" className="news">
    <Article heading="Digital Native News" className={classNames(className)}>
      <List items={items} className="rows" isStoryHidden={true} />
    </Article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  return await ContentfulApi.getPaginatedContent(['news', 'event', 'gallery'], 1)
}

export default NewsPage
