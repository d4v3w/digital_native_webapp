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
}

export const NewsFeed: React.FC<NewsFeedProps> = ({
  items,
  filter = 'news',
  limit,
  order = 'desc',
  className = '',
}) => (
  <div className={classNames(styles.news, className)}>
    <List items={items} filter={filter} limit={limit} order={order} className="news" />
  </div>
)

export default NewsFeed
