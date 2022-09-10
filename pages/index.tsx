import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styles from '../components/layout.module.css'

const IndexPage = (): JSX.Element => (
  <Layout title="Home" className="flex">
    <article className={styles.article}>
      <Hero />
    </article>
  </Layout>
)

export default IndexPage
