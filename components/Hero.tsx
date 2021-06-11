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
        src="/static/images/hero/digital_native-journey_through---understated---gfr027.jpg"
        alt="Digital Native: Journey Through/Understated Single Cover Art"
        width={'responsive'}
        height={'responsive'}
        layout={'responsive'}
      />

        </div>
        <div></div>
        <div></div>
        <div></div>
        
        <div>
          <iframe src="https://open.spotify.com/embed/track/5NzFXYux0iE7S3iY1YCawK?theme=0" width="100%" height="380" frameBorder="0" allow="encrypted-media"></iframe>
        </div>
      </div>
      ${ content }
    </article>
  );
}

export default Hero;
