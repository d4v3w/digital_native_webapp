import { GetStaticProps } from 'next/types'
import { Article } from '../../interfaces'
import { newsData } from '../../utils/news-items'
import { NewsFeed, NewsFeedProps } from '../../components/NewsFeed'
import Layout from '../../components/Layout'
import styles from '../../components/layout.module.css'
import newsStyles from '../../components/newsFeed.module.css'
import classNames from 'classnames'

const NewsPage = ({ items, className = '' }: NewsFeedProps): JSX.Element => (
  <Layout title="Digital Native Latest News">
    <article className={classNames(styles.article, newsStyles.news, className)}>
      <h1 className={classNames(styles.news)}>Digital Native News</h1>
      <p>Digital Native news and updates. Latest Drum and Bass releases.</p>
      <NewsFeed items={items} filter="" order="desc" className="news" isImageHidden={true} isTextHidden={false} />
    </article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Article[] = newsData
  return { props: { items } }
}

export default NewsPage
