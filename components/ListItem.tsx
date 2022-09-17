import Link from 'next/link'
import { Article } from '../interfaces'
import styles from './listItem.module.css'
import utilStyles from './utils.module.css'
import Image from 'next/image'
import Markdown from './Markdown'
import classNames from 'classnames'

type ListItemProps = {
  id: number
  item: Article
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

const newsImage = (image: string | undefined, isImageHidden: boolean | undefined) => {
  if (!image || isImageHidden) {
    return null
  }
  return (
    <div className={styles.newsListItemImage}>
      <Image src={image} alt="" width={250} height={250} layout={'responsive'} priority={true} />
    </div>
  )
}

const ListItem = ({ id, item, className = 'default', isHeadingHidden, isImageHidden, isTextHidden }: ListItemProps) => {
  let readMore = 'Read more...'
  if (isHeadingHidden) {
    item.title = ''
  }
  if (isTextHidden) {
    item.summary = ''
    item.story = ''
    readMore = ''
  }
  return (
    <li className={classNames(styles[className + 'ListItem'], utilStyles.blurredBox)}>
      <Link href="/news/[id]" as={`/news/${item.id}`}>
        <a className={styles.listItem} title={item.title}>
          <article className={className} data-index={id} data-id={item.id.toString()}>
            <h2 className={classNames(styles.heading, styles.shortText)}>{item.title}</h2>
            <Markdown content={item.summary} className={styles.summary} isInline={false} />
            <Markdown content={item.story} className={classNames(styles.summary, styles.shortText)} isInline={false} />
            <Markdown content={readMore} />
            {newsImage(item.image, isImageHidden)}
          </article>
        </a>
      </Link>
    </li>
  )
}

export default ListItem
