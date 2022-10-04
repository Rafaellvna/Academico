// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina"

export default class DisciplinasController {

    index(){
        return Disciplina.all()
    }

    disciplina({request}){
        const dados = request.only(['nome', 'cursosId'])
        return Disciplina.create (dados)
    }
}
