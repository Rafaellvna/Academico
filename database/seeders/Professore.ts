import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professore from 'App/Models/Professore'

export default class extends BaseSeeder {
  public async run () {
    await Professore.createMany([
      { nome: 'Rafael', CPF: 123, matricula: '123', salario: 'R$5000', email: '@123', telefone: '123', CEP: 123, logradouro: '1234', complemento: '02', numero: '1722', bairro: 'Ceilândia'}
    ])
  }
}
