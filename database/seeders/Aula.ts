import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([
      { data: new Date(2000, 1, 1), conteudo: 'BackEnd', turmas_id: 1 }
    ])
  }
}
