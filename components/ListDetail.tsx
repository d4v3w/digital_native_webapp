import { Article } from '../interfaces'
import layoutStyles from '../components/layout.module.css'
import styles from '../components/listDetail.module.css'
import Markdown from './Markdown'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import ListItem from './ListItem'

type ListDetailProps = {
  item: Article
}

const newsImage = (image: string | undefined) => {
  if (!image) {
    return null
  }
  return (
    <div className={styles.detailImage}>
      <Image src={image} alt="" width={250} height={250} layout={'responsive'} />
    </div>
  )
}

const newsLink = (link: string | undefined) => {
  if (!link) {
    return null
  }
  return (
    <Link href={link} passHref>
      <a>
        <Markdown content={link} />
      </a>
    </Link>
  )
}

const ListDetail = ({ item: item }: ListDetailProps) => (
  <>
    <article className={layoutStyles.article}>
      <h1>Digital Native News</h1>
    </article>
    <main>
      <article className={classNames(layoutStyles.article, styles.articleDetail)}>
        <h2>
          <Markdown content={item.title} />
        </h2>
        <section className={styles.content}>
          <blockquote>
            <Markdown content={item.summary} isInline={false} className={styles.summaryText} />
          </blockquote>
          <Markdown content={item.story} />
          {newsLink(item.link)}
          {newsImage(item.image)}
          <Markdown content={item.date} isInline={false} className={styles.date} />
          <nav>
            <Link href="/news" passHref>
              <a>
                <Markdown content="Back" />
              </a>
            </Link>
          </nav>
        </section>
      </article>
    </main>
  </>
)

export default ListDetail
