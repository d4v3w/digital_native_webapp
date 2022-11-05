import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import styles from './imageBox.module.css'

export declare type ImageBoxProps = ImageProps & {
  isBlock: boolean
}

const ImageBox = ({ alt = '', width = 500, height = 500, isBlock = false, ...props }: ImageBoxProps) => {
  if (!props.src) {
    return null
  }
  return (
    <span className={classNames(styles.image, isBlock ? styles.block : styles.inline)}>
      <Image alt={alt} width={width} height={height} {...props} />
    </span>
  )
}

export default ImageBox
