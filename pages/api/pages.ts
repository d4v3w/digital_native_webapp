import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse, Content } from '../../interfaces'
import ContentfulApi from '../../utils/ContentfulApi'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { type, id } = req.query
  try {
    let content: ApiResponse
    if (id) {
      content = await ContentfulApi.getContentBySlug(id)
    } else {
      content = await ContentfulApi.getPaginatedContent(type, 1)
    }

    const items: Content[] = content.items ?? []
    res.status(200).json(items)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    res.status(400).json({ statusCode: 400, message: message })
  }
}

export default handler
