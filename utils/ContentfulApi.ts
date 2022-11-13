import { ApiResponse } from '../interfaces'
import { Config } from './Config'

export default class ContentfulApi {
  static async callContentful(query: string) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) => response.json())
      return data
    } catch (error) {
      throw new Error('Could not fetch data from Contentful!')
    }
  }

  static async getTotalPostsNumber(type = 'news') {
    const query = `
      {
        contentTypeCollection(
          where: { name_in: "${type}" }
        ) {
          items {
            name
            linkedFrom {
              contentCollection {
                total
              }
            }
          }
        }
      }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    const totalPosts = response.data.contentTypeCollection.total ? response.data.blogPostCollection.total : 0

    return totalPosts
  }

  static getPaginatedContent = async (type = 'news', page: number): Promise<ApiResponse> => {
    const skipMultiplier = page === 1 ? 0 : page - 1
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0

    const query = `{
        contentTypeCollection(
          where: { name_in: "${type}" }
          order: sys_publishedAt_DESC
        ) {
          items {
            name
            linkedFrom {
              contentCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}) {
                total
                items {
                  sys {
                    id
                    publishedAt
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

    // Call out to the API
    const apiResponse = { total: 0, items: [] }
    try {
      const response = await this.callContentful(query)
      apiResponse.items = response.data.contentTypeCollection.items[0].linkedFrom.contentCollection.items
      apiResponse.total = response.data.contentTypeCollection.items[0].linkedFrom.contentCollection.total
    } catch (e) {
      console.log(e)
    }
    return apiResponse
  }
}
