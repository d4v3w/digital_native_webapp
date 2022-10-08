import { NextApiRequest, NextApiResponse } from 'next'
import { newsData as pages } from '../../utils/news-items'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { type, id } = req.query
  try {
    let result
    if (id) {
      result = Object.values(pages).filter((v) => {
        v.id.toString() === id
      })
    } else if (type) {
      result = Object.values(pages).filter((v) => {
        v.type.startsWith(`${type}`)
      })
    }
    if (!result) {
      throw new Error('Invalid request. Try another query.')
    }
    res.status(200).json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    res.status(400).json({ statusCode: 400, message: message })
  }
}

export default handler
