// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso"
export default class CursosController {

    index(){
        return Curso.all()
    }

    store({request}){
        const dados = request.only(['nome','duracao','modalidade'])
        return Curso.create(dados) //POST
    }

    show({request}){
        const id = request.param('id')
        return Curso.findOrFail(id) //MOSTRAR
    }

    async destroy({request}){
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        return curso.delete() //APAGAR
    }

    async update({request}){
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        const dados = request.only(['nome', 'duracao', 'modalidade'])

        curso.merge(dados)

        return curso.save() //ATUALIZAR
    }
}
