import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import styles from './imageBox.module.css'

export interface ImageBoxProps extends ImageProps {
  src: string
  isBlock?: boolean
  index?: number
}

const ImageBox: React.FC<ImageBoxProps> = ({
  src = '',
  alt = '',
  width = 800,
  height = 800,
  isBlock = false,
  ...props
}: ImageBoxProps) => {
  return src ? (
    <span className={classNames(styles.image, isBlock ? styles.block : styles.inline)}>
      <Image
        alt={alt}
        width={width}
        height={height}
        src={src}
        quality={80}
        {...props}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </span>
  ) : null
}

export default ImageBox
