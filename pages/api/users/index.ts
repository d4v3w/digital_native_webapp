import { NextApiRequest, NextApiResponse } from 'next'
import { userData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(userData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(userData)
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    res.status(500).json({ statusCode: 500, message: message })
  }
}

export default handler
