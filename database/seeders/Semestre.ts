import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      { nome: 'ADS', data_inicio: new Date(2021, 1, 2), data_fim: new Date(2023, 1, 2) },
      { nome: 'Psicologia', data_inicio: new Date(2021, 1, 2), data_fim: new Date(2023, 1, 2) }
    ])
  }
}