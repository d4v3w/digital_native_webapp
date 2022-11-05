import Image from 'next/image'
import classNames from 'classnames'
import styles from './imageBox.module.css'

const ImageBox = ({ width = 500, height = 500, isBlock = false, ...props }) => {
  if (!props.src) {
    return null
  }
  return (
    <span className={classNames(styles.image, isBlock ? styles.block : styles.inline)}>
      <Image src={props.src} width={width} height={height} {...props} />
    </span>
  )
}

export default ImageBox
