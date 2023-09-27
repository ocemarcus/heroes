import { CategoryDatabase } from '@/repository/category-repository'
import { HeroesDatabase } from '@/repository/heroes-repository'
import { container } from 'tsyringe'

container.register('HeroesRepository', { useClass: HeroesDatabase })
container.register('CategoryRepository', { useClass: CategoryDatabase })
