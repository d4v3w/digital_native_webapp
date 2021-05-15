import { GetStaticProps } from 'next'
import styles from '../../components/layout.module.css'
import { Article } from '../../interfaces'
import { newsData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Article[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title='News'>
    <article>
      <h1 className={styles.heading2Xl}>News</h1>
      <p>
        News from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /news</p>
      <List items={items} />
    </article>
  </Layout >
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Article[] = newsData
  return { props: { items } }
}

export default WithStaticProps
