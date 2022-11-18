import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import ListDetail from '../components/ListDetail'
import { Content, Media } from '../interfaces'
import ContentfulApi from '../utils/ContentfulApi'

type PageProps = {
  item: Content
  media: Array<Media>
}

const AboutPage = ({ item, media }: PageProps) => {
  return (
    <Layout title="About" className="about">
      <ListDetail item={item} media={media} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return await ContentfulApi.getContentBySlug('about')
}

export default AboutPage
