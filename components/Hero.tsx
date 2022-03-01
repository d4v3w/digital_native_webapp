import classNames  from 'classnames'
import styles from '../components/hero.module.css'
import Image from 'next/image'

export interface HeroProps {
  /**
   * Markdown string to render
   */
  content: string
  /**
   * CSS class to add to block element. (isInline must also be false)
   */
  className?: string
}

/**
 * Primary UI component for outputting string markdown
 */  
export const Hero: React.FC<HeroProps> = ({
  content,
  className,
}) => {
  return (
    <article className={classNames(styles.article, styles.hero, className)}>
      <div>

        <div>
          
      <Image
        src="/static/images/hero/digital_native_profile_portrait.jpg"
        alt="Digital Native: Drum and Bass Producer"
        width={'responsive'}
        height={'responsive'}
        layout={'responsive'}
      />

        </div>
        <div></div>
        
        <div>
          <iframe src="https://open.spotify.com/embed/playlist/5Ohs23L7Llqp2Z0ujz4i3O?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>
      ${ content }
    </article>
  );
}

export default Hero;
