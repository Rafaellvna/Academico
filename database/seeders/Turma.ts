import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      { nome: 'ADS', professores_id: 1, disciplinas_id: 6, semestres_id: 2, salas_id: 3, turno: 'Noturno' }
    ])
  }
}
