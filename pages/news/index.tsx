import classNames from 'classnames'
import { GetStaticProps } from 'next/types'
import Article from '../../components/Article'
import Layout from '../../components/Layout'
import styles from '../../components/layout.module.css'
import { List, ListProps } from '../../components/List'
import { Content } from '../../interfaces'
import { newsData } from '../../utils/news-items'

const NewsPage = ({ items, className = '' }: ListProps) => {
  return (
    <Layout title="News" className="news">
      <Article heading="Digital Native News" className={classNames(styles.article, className)}>
        <List items={items} filter="news" order="desc" className="rows" isTextHidden={true} />
      </Article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const items: Content[] = newsData
  return { props: { items } }
}

export default NewsPage
