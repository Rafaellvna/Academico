// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"

export default class AlunosController {

    index(){
        return Aluno.all()
    }

    store({request}){
        const dados = request.only([
            'nome',
            'CPF',
            'matricula',
            'email',
            'telefone',
            'CEP',
            'logradouro',
            'complemento',
            'numero',
            'bairro',
        ])
        return Aluno.create(dados) //POST
    }

    show({request}){
        const id = request.param('id')
        return Aluno.findOrFail(id) //MOSTRAR
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)
        const dados = request.only(['nome', 'cursosId'])
        return aluno.merge(dados).save() //ATUALIZAR
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)
        return aluno.delete() //APAGAR
    }

}
