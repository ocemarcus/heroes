import 'reflect-metadata'
import { CategoryRepository } from '@/repository/category-repository'
import { CreateCategoryUseCase } from '@/usecase/category/create-category-usecase'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('CreateCategoryUseCase', () => {
  let categoryRepository: CategoryRepository

  const data = {
    name: 'X-Men',
    category_id: 'uuid',
  }

  beforeEach(() => {
    categoryRepository = {
      save: vi.fn(),
    } as any
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should it success', async () => {
    const sut = new CreateCategoryUseCase(categoryRepository)

    const saveSpy = vi.spyOn(categoryRepository, 'save').mockResolvedValue()
    await sut.execute(data)
    expect(saveSpy).toHaveBeenCalledTimes(1)
  })
})
