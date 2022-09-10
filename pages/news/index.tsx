import { GetStaticProps } from 'next'
import { Article } from '../../interfaces'
import { newsData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import styles from '../../components/layout.module.css'
import List from '../../components/List'

type Props = {
  items: Article[]
}

const WithStaticProps = ({ items }: Props): JSX.Element => (
  <Layout title="Digital Native Latest News">
    <article>
      <h1 className={styles.headingPrimary}>Digital Native News</h1>
      <p>Digital Native news and updates. Latest Drum and Bass releases.</p>
      <List items={items} />
    </article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Article[] = newsData
  return { props: { items } }
}

export default WithStaticProps
