import Link from 'next/link'
import styles from './utils.module.css'
import { Article } from '../interfaces'
import classNames from 'classnames'
import newsStyles from './news.module.css'
import Image from 'next/image'

type ListItemProps = {
  data: Article
  className?: string
}

const newsImage = (image: string | undefined) => {
  if (!image) {
    return null
  }
  return (
    <div className={newsStyles.newsItemImage}>
      <Image src={image} alt="" width={250} height={250} layout={'responsive'} priority={true} />
    </div>
  )
}

const ListItem = ({ data, className = '' }: ListItemProps) => (
  <article>
    <h2 className={styles.headingPrimary}>{data.title}</h2>
    <div>{data.story}</div>
    {newsImage(data.image)}
    <Link href="/news/[id]" as={`/news/${data.id}`}>
      <a className={classNames(styles.listItem, className ? newsStyles[className + '-item-link'] : 'list-item-link')}>
        Read More...
      </a>
    </Link>
  </article>
)

export default ListItem
