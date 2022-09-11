import { Article } from '../interfaces'
import styles from './newsFeed.module.css'
import List from './List'
import classNames from 'classnames'

export type NewsFeedProps = {
  items: Article[]
  filter?: string
  limit?: number
  order?: string
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

export const NewsFeed: React.FC<NewsFeedProps> = ({
  items,
  filter,
  limit,
  order = 'desc',
  className = '',
  isHeadingHidden,
  isImageHidden,
  isTextHidden,
}) => {
  return (
    <div className={classNames(styles.news, className)}>
      <List
        items={items}
        filter={filter}
        limit={limit}
        order={order}
        className="news"
        isHeadingHidden={isHeadingHidden}
        isImageHidden={isImageHidden}
        isTextHidden={isTextHidden}
      />
    </div>
  )
}

export default NewsFeed
