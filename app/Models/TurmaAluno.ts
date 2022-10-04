import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TurmaAluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public turmas_id: Number

  @column()
  public alunos_id: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
