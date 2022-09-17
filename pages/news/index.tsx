import { GetStaticProps } from 'next/types'
import { Content } from '../../interfaces'
import { newsData } from '../../utils/news-items'
import { NewsFeed, NewsFeedProps } from '../../components/NewsFeed'
import Layout from '../../components/Layout'
import styles from '../../components/layout.module.css'
import newsStyles from '../../components/newsFeed.module.css'
import classNames from 'classnames'
import Article from '../../components/Article'

const NewsPage = ({ items, className = '' }: NewsFeedProps): JSX.Element => (
  <Layout title="News" className="news">
    <Article heading="Digital Native News" className={classNames(styles.article, newsStyles.news, className)}>
      <NewsFeed items={items} filter="" order="desc" className="news" isImageHidden={true} isTextHidden={false} />
    </Article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Content[] = newsData
  return { props: { items } }
}

export default NewsPage
