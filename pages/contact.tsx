import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../components/layout.module.css'

const ContactPage = () => (
  <Layout title='Contact'>
    <article>
      <h1 className={styles.heading2Xl}>Contact Me</h1>
      <p>This is the about page</p>
      <p>
        <Link href='https://www.facebook.com/digitalnativeuk'>
          <a>Facebook: digitalnativeuk</a>
        </Link>
      </p>
      <p>
        <Link href='https://soundcloud.com/digitalnativeuk'>
          <a>Sound Cloud: digitalnativeuk</a>
        </Link>
      </p>
      <p>
        <Link href='https://twitter.com/digitalnativeuk'>
          <a>Twitter: digitalnativeuk</a>
        </Link>
      </p>
    </article >
  </Layout>
)

export default ContactPage