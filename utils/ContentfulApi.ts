import { gql, GraphQLClient, RequestDocument } from 'graphql-request'
import { Config } from './Config'

export default class ContentfulApi {
  static async callContentful(query: RequestDocument) {
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

    const graphQLClient = await new GraphQLClient(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify({ query }),
    })

    const data = await graphQLClient.request(query)
    //console.log(JSON.stringify(query, undefined, 2))
    //console.log(JSON.stringify(data, undefined, 2))

    return data
  }

  static getPaginatedContent = async (type: string | string[] | undefined = 'news', page: number) => {
    const skipMultiplier = page === 1 ? 0 : page - 1
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0
    const pageSize = page === 0 ? 99 : Config.pagination.pageSize

    const query = gql`{
        contentTypeCollection(
          where: { name_in: "${type}" }
          order: sys_publishedAt_DESC
        ) {
          items {
            name
            linkedFrom {
              contentCollection(limit: ${pageSize}, skip: ${skip}) {
                total
                items {
                  sys {
                    id
                    publishedAt
                  }
                  type {
                    name
                  }
                  title
                  slug
                  summary
                  story
                  image
                  link
                }
              }
            }
          }
        }
      }`

    const response = await this.callContentful(query)

    return {
      props: {
        items: response.contentTypeCollection.items[0].linkedFrom.contentCollection.items,
        total: response.contentTypeCollection.items[0].linkedFrom.contentCollection.total,
        type: response.contentTypeCollection.items[0].name,
      },
    }
  }

  static async getTotalPostsNumber(type = 'news') {
    const query = gql`
      {
        contentTypeCollection(
          where: { name_in: "${type}" }
        ) {
          items {
            name
            type {
              name
            }
            linkedFrom {
              contentCollection {
                total
              }
            }
          }
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
        where: { slug_in: "${slug}" }
        limit: 1
      ) {
        total
        items {
          sys {
            id
            publishedAt
          }
          type {
            name
          }
          title
          slug
          summary
          story
          image
          link
          linkedFrom {
            contentCollection {
              items{
                title
                image
                link
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
