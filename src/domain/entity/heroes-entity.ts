import { randomUUID } from 'node:crypto'

export class HeroesEntity {
  category?: {
    id: string
    name: string
  }

  constructor(
    readonly id: string,
    readonly name: string,
    readonly category_id: string,
  ) {}

  static create(name: string, category_id: string) {
    const id = randomUUID()
    return new HeroesEntity(id, name, category_id)
  }
}
