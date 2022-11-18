import { gql, GraphQLClient, RequestDocument } from 'graphql-request'
import { Content, Media } from '../interfaces'
import { PageType } from '../interfaces/index'
import { Config } from './Config'

export default class ContentfulApi {
  static async callContentful(query: RequestDocument) {
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
    //console.log(endpoint)
    const graphQLClient = await new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
    //console.log(query)
    const data = await graphQLClient.request(query)
    //console.log(JSON.stringify(data, undefined, 2))
    return data
  }

  static getPaginatedContent = async (type: PageType | PageType[] | null, page: number) => {
    const skipMultiplier = page === 1 ? 0 : page - 1
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0
    const pageSize = page === 0 ? 99 : Config.pagination.pageSize
    const query = gql`query {
      contentCollection(
        where: { type_in: ${JSON.stringify(type)} }
        order: sys_publishedAt_DESC
        limit: ${pageSize}
        skip: ${skip}
      ) {
        total
        items {
          sys {
            id
            publishedAt
          }
          type
          title
          slug
          summary
          story
          link
          mediaCollection(limit: 10) {
            total
            items {
              title
              description
              url
              width
              height
            }
          }
          relatedCollection(limit: 10) {
            total
            items {
              title
              slug
              type
              sys {
                id
                publishedAt
              }
            }
          }
        }
      }
    }`

    const response = await this.callContentful(query)

    return {
      props: {
        items: response.contentCollection.items as Content[],
        total: response.contentCollection.total as number,
        type: type,
      },
    }
  }

  static async getTotalPostsNumber(type = 'news') {
    const query = gql`
      {
        contentCollection(
          where: { name_in: "${type}" }
        ) {
          total
        }
      }
    `

    const response = await this.callContentful(query)

    return {
      props: {
        total: response.contentCollection.total as number,
        type: type,
      },
    }
  }

  static getContentBySlug = async (slug: string | string[] | undefined) => {
    const query = gql`{
      contentCollection(
        where: { slug: "${slug}" }
        limit: 1
      ) {
        total
        items {
          sys {
            id
            publishedAt
          }
          type
          title
          slug
          summary
          story
          link
          mediaCollection(limit: 10) {
            total
            items {
              title
              description
              url
              width
              height
            }
          }
          relatedCollection(limit: 10) {
            total
            items {
              title
              slug
              type
              sys {
                id
                publishedAt
              }
            }
          }
        }
      }
    }`

    const response = await this.callContentful(query)

    const item = response.contentCollection.items.at(0)
    const itemContent = item as Content
    const media: Array<Media> = Array.from(item.mediaCollection.items)

    return {
      props: {
        item: itemContent as Content,
        media: media,
      },
    }
  }
}
