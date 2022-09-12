import Layout from '../components/Layout'
import styles from '../components/layout.module.css'
import ReactPlayer from 'react-player'

const ProductionPage = (): JSX.Element => (
  <Layout title="Production">
    <main>
      <article className={styles.article}>
        <h1 className={styles.headingPrimary}>Digital Native Production</h1>
        <p>In this section youll find tutorials, samples and resources that will hopefully help you in your own production journey. </p>
        <p>
          Check out the links below to navigate quickly to section you need.
        </p>
      </article>
      <section>
        <article className={styles.article}>
          <div className={styles.player}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=KIdN4IszoVE&t"
              height={'100%'}
              width={'100%'}
            />
          </div>
        </article>
      </section>
      <section>
        <article className={styles.article}>
          <div className={styles.player}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=vp1Z3z59Mlk"
              height={'100%'}
              width={'100%'}
            />
          </div>
        </article>
      </section>
      <section>
        <article className={styles.article}>
          <div className={styles.player}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=3SwZjXyKlbg&t"
              height={'100%'}
              width={'100%'}
            />
          </div>
        </article>
      </section>
    </main>
  </Layout>
)

export default ProductionPage
