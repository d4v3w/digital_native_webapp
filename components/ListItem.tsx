import Link from 'next/link'
import { Article } from '../interfaces'
import styles from './listItem.module.css'
import Image from 'next/image'
import Markdown from './Markdown'
import classNames from 'classnames'

type ListItemProps = {
  id: number
  item: Article
  className?: string
}

const newsImage = (image: string | undefined) => {
  if (!image) {
    return null
  }
  return (
    <div className={styles.newsListItemImage}>
      <Image src={image} alt="" width={250} height={250} layout={'responsive'} />
    </div>
  )
}

const ListItem = ({ id, item, className = 'default' }: ListItemProps) => {
  return (
    <li key={id} className={styles[className + 'ListItem']}>
      <Link href="/news/[id]" as={`/news/${item.id}`}>
        <a className={styles.listItem} title={item.title}>
          <article className={className} data-index={id} data-id={item.id.toString()}>
            <h2 className={classNames(styles.heading, styles.shortText)}>{item.title}</h2>
            <Markdown content={item.summary} className={styles.summary} isInline={false} />
            <Markdown content={item.story} className={classNames(styles.summary, styles.shortText)} isInline={false} />
            {newsImage(item.image)}
          </article>
        </a>
      </Link>
    </li>
  )
}

export default ListItem
