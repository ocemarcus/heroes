import { FindHeroesUseCase } from '@/usecase/heroes/find-heroes-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'

export async function findHeroesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const instance = container.resolve(FindHeroesUseCase)
    const response = await instance.execute()

    reply.send(response)
  } catch (error) {
    reply.status(400).send(error)
  }
}
