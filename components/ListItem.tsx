import Link from 'next/link'
import { Article } from '../interfaces'
import styles from './listItem.module.css'
import Image from 'next/image'

type ListItemProps = {
  id: number
  data: Article
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

const ListItem = ({ id, data, className = 'default' }: ListItemProps) => {
  return (
    <li key={data.id} className={styles[className + 'ListItem']}>
      <article className={className} data-index={id} data-id={data.id.toString()}>
        <h2 className={styles.heading}>{data.title}</h2>
        <div>{data.story}</div>
        {newsImage(data.image)}
        <Link href="/news/[id]" as={`/news/${data.id}`}>
          <a className={styles.listItem}>Read More...</a>
        </Link>
      </article>
    </li>
  )
}

export default ListItem
