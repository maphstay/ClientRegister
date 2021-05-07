import { clientes, checkRequire, checkClientInArray } from '../config.js'
import express from "express"

const api = express.Router();

/** GENERAL SETTINGS */
api.use(express.urlencoded({extended: true}))
api.use(express.json())


/** API ROUTES */
api.get('/api/clients', (req, res) => {
    return res.json(clientes)
})

/** CRIAR NOVO CLIENTE */
api.post('/api/client', checkRequire, (req, res) => {
    const cliente = req.body
    clientes.push(cliente)
    return res.json(cliente)
})

/** ALTERAR UM CLIENTE */
api.put('/api/client/:index', checkRequire, checkClientInArray, (req, res) => {
    const { index } = req.params
    const cliente = req.body
    clientes[index] = cliente
    return res.json(cliente)
})

/** APAGAR UM CLIENTE */
api.delete('/api/client/:index', checkClientInArray, (req, res) => {
    const { index } = req.params
    clientes.splice(index, 1)
    return res.json(clientes)
}) 

export { api }