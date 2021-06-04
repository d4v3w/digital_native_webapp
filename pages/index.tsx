import Link from 'next/link'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import styles from '../components/layout.module.css'

const IndexPage = (): JSX.Element => (
  <Layout title='Home'>
    <article className={styles.article}>
      <h1 className={styles.heading2Xl}>Welcome to Digital Native Online 👋</h1>
      <section className={styles.section}>
        <Markdown content="Welcome to Digital Native Online:" />
        <Link href='/about' >
          <a>Find out more about Digital Native here.</a>
        </Link>
      </section>
      <section className={styles.section}>
        <Markdown content="Happy Jungling!" />
      </section>
    </article>
  </Layout>
)

export default IndexPage
