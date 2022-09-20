import { NextApiRequest, NextApiResponse } from 'next'
import { newsData } from '../../../utils/news-items'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(newsData)) {
      throw new Error('Cannot find news data')
    }

    res.status(200).json(newsData)
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    res.status(500).json({ statusCode: 500, message: message })
  }
}

export default handler
