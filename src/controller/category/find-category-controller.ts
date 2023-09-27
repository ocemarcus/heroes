import { FindCategoryUseCase } from '@/usecase/category/find-category-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'

export async function findCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const instance = container.resolve(FindCategoryUseCase)
    const response = await instance.execute()

    reply.send(response)
  } catch (error) {
    reply.status(400).send(error)
  }
}
