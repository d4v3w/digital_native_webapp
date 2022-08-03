import Layout from '../components/Layout'
import styles from '../components/layout.module.css'
import Link from 'next/link'

const AboutPage = () => (
  <Layout title="About">
    <article className={styles.article}>
      <h1 className={styles.headingPrimary}>About Digital Native</h1>
      <p>Drum and Bass Producer from the Midlands, UK.</p>
      <p>
        With a sound on the deeper, liquid side of dnb, but not averse to more technical, jungly or darker styles and
        drawing influence from a broad musical taste, the focus is on creating a musical journey.
      </p>
      <p>
        Expect old breaks, musicality, emotion and soul at the core of anything you hear from Digital Native with
        attention to the details.
      </p>
      <p>
        Releases on Goldfat, Hospital, Glitch Audio, Beats In Mind, Silent Audio, Liquid Brilliants and SIMBAL
        Recordings. 
        
        Self releases available to stream or download via Bandcamp and Soundcloud.
      </p>
      <p>
        <Link href="https://digitalnativeuk.bandcamp.com" passHref>
          <a>Bandcamp: digitalnativeuk</a>
        </Link>
        <br />
        <Link href="https://soundcloud.com/digitalnativeuk" passHref>
          <a>Soundcloud: digitalnativeuk</a>
        </Link>
        <br />
        <Link href="https://www.facebook.com/digitalnativeuk" passHref>
          <a>Facebook: digitalnativeuk</a>
        </Link>
      </p>
    </article>
  </Layout>
)

export default AboutPage
