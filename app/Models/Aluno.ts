import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: String

  @column()
  public CPF: Number

  @column()
  public matricula: String

  @column()
  public email: String

  @column()
  public telefone: String

  @column()
  public CEP: Number

  @column()
  public logradouro: String

  @column()
  public complemento: String

  @column()
  public numero: String

  @column()
  public bairro: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
