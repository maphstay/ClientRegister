import { Router } from 'express'

const baseRouter = Router()

baseRouter.get('/', (req, res) => {
    res.status(200).json({
        descricao: 'Desafio TeamSoft',
        versao: 1.0,
    })
})

export { baseRouter }