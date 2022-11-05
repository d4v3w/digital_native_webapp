import Article from '../components/Article'
import { Counter } from '../components/Counter'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import portrait from '../public/images/hero/digital_native_profile_portrait.jpg'

const TestPage = () => {
  return (
    <Layout title="Test" className="about">
      <Article heading="Test Page" src={portrait}>
        <Markdown className="summary">Test Page. Not for public consumption.</Markdown>
        <Counter />
      </Article>
    </Layout>
  )
}

export default TestPage
