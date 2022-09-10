import { GetStaticProps } from 'next/types'
import { Article } from '../../interfaces'
import { newsData } from '../../utils/news-items'
import Layout from '../../components/Layout'
import styles from '../../components/news.module.css'
import List from '../../components/List'
import classNames from 'classnames'

export type NewsProps = {
  items: Article[]
  filter?: string
  limit?: number
  className?: string
}

const NewsPage = ({ items, className = '' }: NewsProps): JSX.Element => (
  <Layout title="Digital Native Latest News">
    <article className={classNames(styles.news, className)}>
      <h1 className={classNames(styles.news)}>Digital Native News</h1>
      <p>Digital Native news and updates. Latest Drum and Bass releases.</p>
      <List items={items} filter="news" order="desc" className="news" />
    </article>
  </Layout>
)

export const NewsFeed: React.FC<NewsProps> = ({ items, filter = 'news', limit = 2, className = '' }) => (
  <article className={classNames(styles.news, className)}>
    <List items={items} filter={filter} limit={limit} order="desc" className="news" />
  </article>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Article[] = newsData
  return { props: { items } }
}

export default NewsPage
