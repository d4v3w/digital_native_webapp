import { GetStaticProps } from 'next/types'
import { Content } from '../../interfaces'
import { newsData } from '../../utils/news-items'
import { List, ListProps } from '../../components/List'
import Layout from '../../components/Layout'
import styles from '../../components/layout.module.css'
import classNames from 'classnames'
import Article from '../../components/Article'

const NewsPage = ({ items, className = '' }: ListProps): JSX.Element => (
  <Layout title="News" className="news">
    <Article heading="Digital Native News" className={classNames(styles.article, className)}>
      <List items={items} filter="" order="desc" className="rows" isTextHidden={true} />
    </Article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Content[] = newsData
  return { props: { items } }
}

export default NewsPage
