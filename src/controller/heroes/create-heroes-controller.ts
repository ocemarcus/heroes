import { CreateHeroesUseCase } from '@/usecase/heroes/create-heroes-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'
import { z } from 'zod'

export async function createHeroesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const schema = z.object({
      name: z.string().min(1),
      category_id: z.string().uuid(),
    })
    const data = schema.parse(request.body)

    const instance = container.resolve(CreateHeroesUseCase)
    await instance.execute(data)

    reply.status(201).send()
  } catch (error) {
    reply.status(400).send(error)
  }
}
