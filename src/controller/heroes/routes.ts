import { FastifyInstance } from 'fastify'
import { createHeroesController } from './create-heroes-controller'
import { findHeroesController } from './find-heroes-controller'

export async function HeroesRoutes(app: FastifyInstance) {
  app.get('/', findHeroesController)
  app.post('/', createHeroesController)
}
