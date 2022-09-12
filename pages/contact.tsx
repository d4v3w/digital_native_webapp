import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../components/layout.module.css'

const ContactPage = (): JSX.Element => (
  <Layout title="Contact">
    <main>
      <section>
        <article className={styles.article}>
          <h1 className={styles.headingPrimary}>Contact Me</h1>
          <p>
            You can reach me in the usual places across All social media Platforms - <strong>digitalnativeuk</strong>
          </p>
          <ul className={styles.listSquare}>
            <li>
              <Link href="https://www.facebook.com/digitalnativeuk" passHref>
                <a>Facebook: digitalnativeuk</a>
              </Link>
            </li>
            <li>
              <Link href="https://soundcloud.com/digitalnativeuk" passHref>
                <a>Sound Cloud: digitalnativeuk</a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/digitalnativeuk" passHref>
                <a>Twitter: digitalnativeuk</a>
              </Link>
            </li>
            <li>
              <Link href="https://digitalnativeuk.bandcamp.com" passHref>
                <a>Bandcamp: digitalnativeuk</a>
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </main>
  </Layout>
)

export default ContactPage
