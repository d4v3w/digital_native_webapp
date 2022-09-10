import classNames from 'classnames'
import styles from '../components/hero.module.css'
import Image from 'next/image'
import heroImage from '../public/images/hero/digital_native_profile_portrait.jpg'

export interface HeroProps {
  /**
   * CSS class to add to block element. (isInline must also be false)
   */
  className?: string
}

/**
 * Primary UI component for outputting string markdown
 */
export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <article className={classNames(styles.article, styles.hero, className)}>
      <Image
        src={heroImage}
        alt="Digital Native: Drum and Bass Producer"
        width={512}
        height={512}
        layout={'responsive'}
        priority={true}
      />
      <h1 className={styles.headingPrimary}>Digital Native UK</h1>
      <p>
        Releases on Goldfat, Hospital, Glitch Audio, Beats In Mind, Silent Audio, Liquid Brilliants and SIMBAL
        Recordings. Self releases available to stream or download via Bandcamp and Soundcloud.
      </p>
      <div>
        <div>
          <iframe
            src="https://open.spotify.com/embed/playlist/5Ohs23L7Llqp2Z0ujz4i3O?utm_source=generator&theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </article>
  )
}

export default Hero
