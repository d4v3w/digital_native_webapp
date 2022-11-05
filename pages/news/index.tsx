import classNames from 'classnames'
import { GetStaticProps } from 'next/types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Article from '../../components/Article'
import Layout from '../../components/Layout'
import styles from '../../components/layout.module.css'
import { List, ListProps } from '../../components/List'
import { increment } from '../../features/counter'
import { Content } from '../../interfaces'
import { newsData } from '../../utils/news-items'

const NewsPage = ({ items, className = '' }: ListProps) => {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector((state) => state.news)
  return (
    <Layout title="News" className="news">
      <Article heading="Digital Native News" className={classNames(styles.article, className)}>
        {pending && <p>Loading...</p>}
        {data && <p>{data.quote}</p>}
        {error && <p>Oops, something went wrong</p>}

        <button onClick={() => dispatch(increment())} disabled={pending}>
          Generate
        </button>
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
