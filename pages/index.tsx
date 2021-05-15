import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../components/layout.module.css'

const IndexPage = () => (
  <Layout title='Home'>
    <article>
      <h1 className={styles.heading2Xl}>Welcome to Digital Native Online 👋</h1>
      <p>
        Welcome to Digital Native Online. Find out more{' '}
        <Link href='/about' >
          <a>about</a>
        </Link>{' '}
        Digital Native here.
      </p>
      <p>
        Happy Jungling!
      </p>
    </article>
  </Layout>
)

export default IndexPage
