import { gql, GraphQLClient, RequestDocument } from 'graphql-request'
import { PageType } from '../interfaces/PageType'
import { Config } from './Config'

export default class ContentfulApi {
  static async callContentful(query: RequestDocument) {
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

    const graphQLClient = await new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await graphQLClient.request(query)
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
          story
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
        items: response.contentCollection.items,
        total: response.contentCollection.total,
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
        total: response.contentTypeCollection.items[0].linkedFrom.contentCollection.total,
        type: response.contentTypeCollection.items[0].name,
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
          story
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
        items: response.contentCollection.items,
        total: response.contentCollection.total,
      },
    }
  }
}
