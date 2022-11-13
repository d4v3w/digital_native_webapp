import classNames from 'classnames'
import styles from './list.module.css'
import ListItem from './ListItem'

import type { Content } from '../interfaces'

export interface ListProps {
  items: Content[]
  filter?: string
  order?: string
  limit?: number
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isTextHidden?: boolean
}

export const List: React.FC<ListProps> = ({
  items,
  className = '',
  isHeadingHidden,
  isImageHidden,
  isTextHidden,
}: ListProps) => {
  console.log(items)

  let counter = -1
  return (
    <ul className={classNames(styles.list, styles[className])}>
      {items.map((item, index) => {
        // Increment counter
        ++counter
        const key = `${className}-item-${index.toString()}-${item.slug}` || `${index.toString()}-${counter.toString()}`
        return (
          <ListItem
            key={key}
            id={counter}
            item={item}
            className={className}
            isHeadingHidden={isHeadingHidden}
            isImageHidden={isImageHidden}
            isTextHidden={isTextHidden}
          />
        )
      })}
    </ul>
  )
}

export default List
