import Layout from '../components/Layout'
import Article from '../components/Article'
import Player from '../components/Player'
import Markdown from '../components/Markdown'
import Section from '../components/Section'

const ProductionPage = (): JSX.Element => (
  <Layout title="Production" className="production">
    <Article heading="Digital Native Production" isInline={true}>
      <Markdown className="summary">
        In this section youll find tutorials, samples and resources that will hopefully help you in your own production
        journey. Check out the links below to navigate quickly to section you need.
      </Markdown>
    </Article>
    <Section>
      <Article heading="Forever and Ever" isInline={false}>
        <Player url="https://www.youtube.com/watch?v=KIdN4IszoVE&t" />
      </Article>
      <Article heading="London Elektricity Remix" isInline={false}>
        <Player url="https://www.youtube.com/watch?v=vp1Z3z59Mlk" />
      </Article>
      <Article heading="Joureny Through" isInline={false}>
        <Player url="https://www.youtube.com/watch?v=3SwZjXyKlbg&t" />
      </Article>
    </Section>
  </Layout>
)

export default ProductionPage
