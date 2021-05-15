import Layout from '../components/Layout'
import styles from '../components/layout.module.css'

const AboutPage = () => (
  <Layout title="About">
    <article>
      <h1 className={styles.heading2Xl}>About</h1>
      <p>This is the about page.</p>
      <p>
        All about Digital Native.
      </p>
    </article>
  </Layout>
)

export default AboutPage
