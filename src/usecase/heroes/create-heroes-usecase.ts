import { HeroesEntity } from '@/domain/entity/heroes-entity'
import { HeroesRepository } from '@/repository/heroes-repository'
import { inject, injectable } from 'tsyringe'

export type CreateHeroesRequest = {
  name: string
  category_id: string
}

@injectable()
export class CreateHeroesUseCase {
  constructor(
    @inject('HeroesRepository')
    private readonly heroesRepository: HeroesRepository,
  ) {}

  public async execute(data: CreateHeroesRequest) {
    const hero = HeroesEntity.create(data.name, data.category_id)
    await this.heroesRepository.save(hero)
  }
}
