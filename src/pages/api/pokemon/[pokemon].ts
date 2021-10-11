import { NextApiRequest, NextApiResponse } from 'next'
import api from '../instance'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { query } = req
  const { pokemon } = query
  const { data, status } = await api.get(`pokemon/${pokemon}`)

  res.status(status).json(data)
}
