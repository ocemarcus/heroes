import { CategoryRepository } from '@/repository/category-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  public async execute() {
    return await this.categoryRepository.find()
  }
}
