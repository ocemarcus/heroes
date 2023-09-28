import 'reflect-metadata'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { app } from 'src/server'
import { CreateHeroesUseCase } from '@/usecase/heroes/create-heroes-usecase'
describe('HeroesController', () => {
  const body = {
    name: 'X-Men',
    category_id: 'd7f0cb02-3f12-4cee-9a3c-0e49bfb1f4bc',
  }
  afterEach(() => {
    app.server.close()
    vi.resetAllMocks()
  })
  it('should schema body validate', async () => {
    const response = await app.inject({
      body: {},
      method: 'POST',
      path: '/heroes',
    })
    expect(response.statusCode).toBe(400)
  })
  it('should save success', async () => {
    vi.spyOn(CreateHeroesUseCase.prototype, 'execute').mockResolvedValue()
    const response = await app.inject({
      body,
      method: 'POST',
      path: '/heroes',
    })
    expect(response.statusCode).toBe(201)
  })
  it('should throw save', async () => {
    const errMsg = new Error('invalid save')
    vi.spyOn(CreateHeroesUseCase.prototype, 'execute').mockRejectedValue(errMsg)

    const response = await app.inject({
      body,
      method: 'POST',
      path: '/heroes',
    })
    expect(response.statusCode).toBe(400)

    response.body = JSON.parse(response.body)
    expect(response.body).toHaveProperty('message', 'invalid save')
  })
})
