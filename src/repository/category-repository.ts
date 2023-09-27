import { CategoryEntity } from '@/domain/entity/category-entity'
import { prisma } from '@/infra/database/prisma-client'
import { injectable } from 'tsyringe'

export interface CategoryRepository {
  find(): Promise<CategoryEntity[]>
  save(data: CategoryEntity): Promise<void>
  findById(id: string): Promise<CategoryEntity | null>
}

@injectable()
export class CategoryDatabase implements CategoryRepository {
  async find(): Promise<CategoryEntity[]> {
    const category = await prisma.category.findMany()
    return category.map((item) => new CategoryEntity(item.id, item.name))
  }

  async findById(id: string): Promise<CategoryEntity | null> {
    const hero = await prisma.category.findUnique({
      where: {
        id,
      },
    })
    if (!hero) return null
    return new CategoryEntity(hero.id, hero.name)
  }

  async save(data: CategoryEntity): Promise<void> {
    await prisma.category.create({
      data: data as any,
    })
  }
}
