import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../instance'
import type { DataResponsePokemon } from 'services/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponsePokemon>
): Promise<void> {
  const { method } = req
  try {
    if (method === 'GET') {
      const { data, status } = await api.get('/pokemon?limit=6', {
        headers: {
          'Content-type': 'application/json',
        },
      })
      return res.status(status).json(data)
    }
    res.status(200).json({} as DataResponsePokemon)
  } catch (error) {
    res.status(200).json({} as DataResponsePokemon)
  }
}
