import 'reflect-metadata'
import { HeroesRepository } from '@/repository/heroes-repository'
import { CreateHeroesUseCase } from '@/usecase/heroes/create-heroes-usecase'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('CreateHeroesUseCase', () => {
  let heroesRepository: HeroesRepository

  const data = {
    name: 'X-Men',
    category_id: 'uuid',
  }

  beforeEach(() => {
    heroesRepository = {
      save: vi.fn(),
    } as any
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should it success', async () => {
    const sut = new CreateHeroesUseCase(heroesRepository)

    const saveSpy = vi.spyOn(heroesRepository, 'save').mockResolvedValue()
    await sut.execute(data)
    expect(saveSpy).toHaveBeenCalledTimes(1)
  })
})
