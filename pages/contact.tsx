import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../components/layout.module.css'

const ContactPage = () => (
  <Layout title="Contact">
    <article className={styles.article}>
      <h1 className={styles.headingPrimary}>Contact Me</h1>
      <p>Contact Digital Native UK via social media links:</p>
      <p>
        <Link href="https://www.facebook.com/digitalnativeuk" passHref>
          <a>Facebook: digitalnativeuk</a>
        </Link>
      </p>
      <p>
        <Link href="https://soundcloud.com/digitalnativeuk" passHref>
          <a>Sound Cloud: digitalnativeuk</a>
        </Link>
      </p>
      <p>
        <Link href="https://twitter.com/digitalnativeuk" passHref>
          <a>Twitter: digitalnativeuk</a>
        </Link>
      </p>
      <p>
        <Link href="https://digitalnativeuk.bandcamp.com" passHref>
          <a>Bandcamp: digitalnativeuk</a>
        </Link>
      </p>
    </article>
  </Layout>
)

export default ContactPage
