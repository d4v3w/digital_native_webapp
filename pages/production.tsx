import Layout from '../components/Layout'
import styles from '../components/layout.module.css'
import ReactPlayer from 'react-player'

const ProductionPage = (): JSX.Element => (
  <Layout title="Production">
    <main>
      <article className={styles.article}>
        <h1 className={styles.headingPrimary}>Digital Native Production Tutorials</h1>
        <p>Drum and Bass Producer from the Midlands, UK.</p>
        <p>
          With a sound on the deeper, liquid side of dnb, but not averse to more technical, jungly or darker styles and
          drawing influence from a broad musical taste, the focus is on creating a musical journey.
        </p>
      </article>
      <section>
        <article className={styles.article}>
          <ReactPlayer url="https://www.youtube.com/watch?v=x6lHFy0J7zo&list=PLBkTp5mHsGugRXtoQht4Pd1QC0ct3orhJ" />
        </article>
      </section>
    </main>
  </Layout>
)

export default ProductionPage
