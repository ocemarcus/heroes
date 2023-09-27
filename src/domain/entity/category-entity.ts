import { randomUUID } from 'node:crypto'

export class CategoryEntity {
  constructor(
    readonly id: string,
    readonly name: string,
  ) {}

  static create(name: string) {
    const id = randomUUID()
    return new CategoryEntity(id, name)
  }
}
