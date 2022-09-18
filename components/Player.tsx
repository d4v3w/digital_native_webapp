import ReactPlayer from 'react-player'
import classNames from 'classnames'
import styles from './player.module.css'

type PlayerProps = {
  url: string
  className?: string
}

const Player = ({ url: url, className = '' }: PlayerProps) => {
  return (
    <div className={classNames(styles.player, className)}>
      <ReactPlayer url={url} height={100} width={300} />
    </div>
  )
}

export default Player
