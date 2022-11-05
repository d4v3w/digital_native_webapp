import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import styles from './imageBox.module.css'

export interface ImageBoxProps extends ImageProps {
  isBlock: boolean
}

const ImageBox: React.FC<ImageBoxProps> = ({
  src,
  alt = '',
  width = 300,
  height = 300,
  isBlock = false,
  ...props
}: ImageBoxProps) => {
  return src ? (
    <span className={classNames(styles.image, isBlock ? styles.block : styles.inline)}>
      <Image alt={alt} width={width} height={height} src={src} {...props} />
    </span>
  ) : null
}

export default ImageBox
