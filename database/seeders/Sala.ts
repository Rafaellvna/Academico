import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      { nome:'ADS', capacidade: 40, tipo: 'A' },
      { nome:'Psicologia', capacidade: 40, tipo: 'B' },
      { nome:'Direito', capacidade: 40, tipo: 'C' }
    ])
  }
}
