import { CategoryEntity } from '@/domain/entity/category-entity'
import { CategoryRepository } from '@/repository/category-repository'
import { inject, injectable } from 'tsyringe'

export type CreateCategoryRequest = {
  name: string
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  public async execute(data: CreateCategoryRequest) {
    const category = CategoryEntity.create(data.name)

    await this.categoryRepository.save(category)
  }
}
