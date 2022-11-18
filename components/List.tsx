import classNames from 'classnames'
import styles from './list.module.css'
import ListItem from './ListItem'

import { Content } from '../interfaces'

export interface ListProps {
  items: Content[]
  total?: number | undefined
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isSummaryHidden?: boolean
  isStoryHidden?: boolean
}

export const List: React.FC<ListProps> = ({ items, className = '', ...props }: ListProps) => {
  let counter = -1
  return (
    <ul className={classNames(styles.list, styles[className])}>
      {items.map((item, index) => {
        // Increment counter
        ++counter
        const key = `${className}-item-${index.toString()}-${item.slug}` || `${index.toString()}-${counter.toString()}`
        return (
          <ListItem key={key} id={counter} item={item} media={item.mediaCollection} className={className} {...props} />
        )
      })}
    </ul>
  )
}

export default List
