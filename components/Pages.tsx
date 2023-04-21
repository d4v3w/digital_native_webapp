import classNames from 'classnames'
import PageItem from './PageItem'
import styles from './pages.module.css'

import { Content } from '../interfaces'

export interface PagesProps {
  items: Content[]
  className?: string
  isHeadingHidden?: boolean
  isImageHidden?: boolean
  isSummaryHidden?: boolean
  isStoryHidden?: boolean
}

export const Pages: React.FC<PagesProps> = ({ items, className = '', ...props }: PagesProps) => {
  let counter = -1

  return (
    <ul className={classNames(styles.list, styles[className])}>
      {items.map((item, index) => {
        // Increment counter
        ++counter
        const key = `${className}-item-${index.toString()}-${item.slug}` || `${index.toString()}-${counter.toString()}`
        return <PageItem key={key} id={counter} item={item} className={className} {...props} />
      })}
    </ul>
  )
}

export default Pages
