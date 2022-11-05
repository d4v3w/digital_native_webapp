import classNames from 'classnames'
import ReactPlayer from 'react-player'
import styles from './player.module.css'

export interface PlayerProps {
  url: string
  className?: string
}

const Player: React.FC<PlayerProps> = ({ url: url, className = '' }: PlayerProps) => {
  return (
    <div className={classNames(styles.player, className)}>
      <ReactPlayer url={url} height={'auto'} width={'auto'} />
    </div>
  )
}

export default Player
