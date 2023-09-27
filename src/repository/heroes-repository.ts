import { HeroesEntity } from '@/domain/entity/heroes-entity'
import { prisma } from '@/infra/database/prisma-client'
import { Category, Heores } from '@prisma/client'
import { injectable } from 'tsyringe'

export interface HeroesRepository {
  find(): Promise<HeroesEntity[]>
  save(data: HeroesEntity): Promise<void>
  findById(id: string): Promise<HeroesEntity | null>
}

@injectable()
export class HeroesDatabase implements HeroesRepository {
  static build(hero: Heores, category?: Category) {
    const heroesEntity = new HeroesEntity(hero.id, hero.name, hero.category_id)
    if (category) heroesEntity.category = category
    return hero
  }

  async find(): Promise<HeroesEntity[]> {
    const heores = await prisma.heores.findMany({
      include: {
        category: true,
      },
    })
    return heores.map((item) => HeroesDatabase.build(item, item.category))
  }

  async findById(id: string): Promise<HeroesEntity | null> {
    const hero = await prisma.heores.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    })
    if (!hero) return null
    return HeroesDatabase.build(hero, hero.category)
  }

  async save(data: HeroesEntity): Promise<void> {
    await prisma.heores.create({
      data: data as any,
    })
  }
}
