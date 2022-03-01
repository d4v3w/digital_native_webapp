import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styles from '../components/layout.module.css'

const IndexPage = (): JSX.Element => (
  <Layout title='Home'>
    <Hero content="Digital Native" />
  </Layout>
)

export default IndexPage
