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

/** CREATE NEW CLIENT */
api.post('/api/client', checkRequire, (req, res) => {
    const cliente = req.body
    clientes.push(cliente)
    return res.json(cliente)
})

/** ALTER CLIENT */
api.put('/api/client/:index', checkRequire, checkClientInArray, (req, res) => {
    const { index } = req.params
    const cliente = req.body
    clientes[index] = cliente
    return res.json(cliente)
})

/** DELETE CLIENT */
api.delete('/api/client/:index', checkClientInArray, (req, res) => {
    const { index } = req.params
    clientes.splice(index, 1)
    return res.json(clientes)
}) 

export { api }