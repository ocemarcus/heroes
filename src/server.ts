import fastify from 'fastify'
import metrics from 'fastify-metrics'
import { HeroesRoutes } from './controller/heroes/routes'
import './infra/container'
import { CategoryRoutes } from './controller/category/routes'

export const app = fastify({
  logger: true,
})

app.register(metrics, { endpoint: '/metrics' })
app.register(HeroesRoutes, { prefix: 'heroes' })
app.register(CategoryRoutes, { prefix: 'category' })
