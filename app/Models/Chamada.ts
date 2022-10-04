import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Chamada extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public aulas_id: Number

  @column()
  public alunos_id: Number

  @column()
  public presenca: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
