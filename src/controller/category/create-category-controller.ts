import { CreateCategoryUseCase } from '@/usecase/category/create-category-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'
import { z } from 'zod'

export async function createCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const schema = z.object({
      name: z.string().min(1),
    })
    const data = schema.parse(request.body)

    const instance = container.resolve(CreateCategoryUseCase)
    await instance.execute(data)

    reply.status(201).send()
  } catch (error) {
    reply.status(400).send(error)
  }
}
