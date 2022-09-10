import ListItem from './ListItem'
import { Article } from '../interfaces'
import styles from './utils.module.css'
import newsStyles from './news.module.css'
import classNames from 'classnames'

export type ListProps = {
  items: Article[]
  className?: string
}

const List = ({ items, className = '' }: ListProps) => (
  <ul className={classNames(styles.list, className ? newsStyles[className + '-list'] : 'list')}>
    {items.map((item) => (
      <li key={item.id} className={className ? newsStyles[className + '-item'] : 'list-item'}>
        <ListItem data={item} className={className} />
      </li>
    ))}
  </ul>
)

export default List
