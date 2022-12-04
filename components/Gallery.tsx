import { Asset } from 'contentful'
import { Media } from '../interfaces'
import styles from './gallery.module.css'
import ImageBox from './ImageBox'

export interface GalleryProps {
  items: Asset[] | undefined
  className?: string
}

export const Gallery: React.FC<GalleryProps> = ({ items = [] }) => {
  if (items.length === 0) {
    return null
  }
  console.log(items)
  return (
    <div className={styles.gallery}>
      {items.map((item, index) => {
        const image: Media = item as unknown as Media
        return (
          <div className={styles.galleryItem}>
            <ImageBox
              src={image.url}
              width={image.width}
              height={image.height}
              title={image.title}
              alt={image.description || image.title || ''}
              isBlock={false}
              index={index}
            />
          </div>
        )
      })}
    </div>
  )
}
