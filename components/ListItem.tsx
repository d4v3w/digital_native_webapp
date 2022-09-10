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

const ListItem = ({ data, className = '' }: ListItemProps) => (
  <article>
    <h2 className={styles.headingPrimary}>{data.title}</h2>
    <div>{data.story}</div>
    <div className={styles.newsItemImage}>
      <Image src={data.image} alt="" width={120} height={120} layout={'responsive'} priority={true} />
    </div>
    <Link href="/news/[id]" as={`/news/${data.id}`}>
      <a className={classNames(styles.listItem, className ? newsStyles[className + '-item-link'] : 'list-item-link')}>
        Read More...
      </a>
    </Link>
  </article>
)

export default ListItem
