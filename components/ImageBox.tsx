import classNames from 'classnames'
import Image from 'next/image'
import styles from './imageBox.module.css'

const ImageBox = ({ width = 500, height = 500, alt = '', isBlock = false, ...props }) => {
  if (!props.src) {
    return null
  }
  return (
    <span className={classNames(styles.image, isBlock ? styles.block : styles.inline)}>
      <Image src={props.src} width={width} height={height} alt={alt} {...props} />
    </span>
  )
}

export default ImageBox
