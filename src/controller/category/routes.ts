import { FastifyInstance } from 'fastify'
import { createCategoryController } from './create-category-controller'
import { findCategoryController } from './find-category-controller'

export async function CategoryRoutes(app: FastifyInstance) {
  app.get('/', findCategoryController)
  app.post('/', createCategoryController)
}
