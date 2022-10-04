import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      { nome: 'Rafael', CPF: 123, matricula: '123', email: '@123', telefone: '123', CEP: 123, logradouro: '1234', complemento: '02', numero: '1722', bairro: 'Ceilândia' }
    ])
  }
}
