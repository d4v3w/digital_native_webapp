import { GetStaticProps } from 'next/types'
import { Article } from '../../interfaces'
import { newsData } from './news-items'
import Layout from '../../components/Layout'
import styles from '../../components/news.module.css'
import List from '../../components/List'
import classNames from 'classnames'

export type NewsProps = {
  items: Article[]
  className?: string
}

const NewsPage = ({ items }: NewsProps): JSX.Element => (
  <Layout title="Digital Native Latest News">
    <article>
      <h1 className={classNames(styles.news)}>Digital Native News</h1>
      <p>Digital Native news and updates. Latest Drum and Bass releases.</p>
      <List items={items} className="news" />
    </article>
  </Layout>
)

export const NewsFeed: React.FC<NewsProps> = ({ items, className = '' }) => (
  <article className={classNames(styles.news, className)}>
    <List items={items} className="news" />
  </article>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Article[] = newsData
  return { props: { items } }
}

export default NewsPage
