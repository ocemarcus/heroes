import { HeroesRepository } from '@/repository/heroes-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindHeroesUseCase {
  constructor(
    @inject('HeroesRepository')
    private readonly heroesRepository: HeroesRepository,
  ) {}

  public async execute() {
    return await this.heroesRepository.find()
  }
}
