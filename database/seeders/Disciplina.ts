import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: 'FrontEnd', cursosId: 1},
      {nome: 'Backend', cursosId: 1},
      {nome: 'Redes I', cursosId: 2},
      {nome: 'Anatomia', cursosId: 4},
      {nome: 'História do Brasil', cursosId: 10},
      {nome: 'História do Mundo', cursosId: 10},
      {nome: 'Dir. Administrativo', cursosId: 3},
      {nome: 'Dir. Penal', cursosId: 3},
      {nome: 'Freud', cursosId: 8},
      {nome: 'Alfabetização', cursosId: 11},
    ])
  }
}
