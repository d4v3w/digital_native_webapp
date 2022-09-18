import Layout from '../components/Layout'
import Article from '../components/Article'
import Player from '../components/Player'
import Markdown from '../components/Markdown'

const ProductionPage = (): JSX.Element => (
  <Layout title="Production" className="production">
    <Article heading="Digital Native Production Tutorials" isInline={true}>
      <Markdown className="summary">
        In this section youll find tutorials, samples and resources that will hopefully 
        help you in your own production journey. Check out the links below to navigate 
        quickly to section you need.
      </Markdown>
      {/* prettier-ignore */}
      <Markdown className="article">
         Steinberg Cubase
        | Native Instruments
        | Drum & Bass
        | Production
      </Markdown>
    </Article>
    <Article heading="Forever and Ever | Track Breakdown" isInline={true}>
      <Player url="https://www.youtube.com/watch?v=KIdN4IszoVE&t" />
    </Article>
    <Article
      heading="London Elektricity - 'Possible Worlds' ft. Inja (Digital Native Remix)"
      isInline={true}
    >
      <Player url="https://www.youtube.com/watch?v=vp1Z3z59Mlk" />
    </Article>
    <Article heading="Journey Through | Track Breakdown" isInline={true}>
      <Player url="https://www.youtube.com/watch?v=3SwZjXyKlbg&t" />
    </Article>
  </Layout>
)

export default ProductionPage
