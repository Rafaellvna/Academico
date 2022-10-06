// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina"

export default class DisciplinasController {

    index(){
        return Disciplina.all()
    }

    store({request}){
        const dados = request.only(['nome', 'cursosId'])
        return Disciplina.create(dados) //POST
    }

    show({request}){
        const id = request.param('id')
        return Disciplina.findOrFail(id) //MOSTRAR
    }

    async update({request}){
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)
        const dados = request.only(['nome', 'cursosId'])
        return disciplina.merge(dados).save() //ATUALIZAR
    }

    async destroy({request}){
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)
        return disciplina.delete() //APAGAR
    }
}
