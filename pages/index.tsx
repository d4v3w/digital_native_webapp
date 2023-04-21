import { GetStaticProps } from 'next/types'
import Article from '../components/Article'
import Layout from '../components/Layout'
import { Pages, PagesProps } from '../components/Pages'
import { ALL_PAGE_TYPES } from '../interfaces'
import ContentfulApi from '../utils/ContentfulApi'

const Page = ({ items }: PagesProps) => (
  <Layout title="Digital Native">
    <Article heading="Online Content">
      <Pages items={items} />
    </Article>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  return await ContentfulApi.getPaginatedContent(ALL_PAGE_TYPES, 1)
}

export default Page
