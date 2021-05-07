import { clientes, checkRequire, checkClientInArray } from '../config.js'
import express from "express"

const crud = express.Router()

/** GENERAL SETTINGS */
crud.use(express.urlencoded({extended: true}))
crud.use(express.json())

/** INTEGRATION ROUTES */
/** HOME PAGE */
crud.get('/clients', (req, res) => {
    return res.render('index.ejs')
})

/** PAGE CADASTRO */
crud.get('/client/new', (req, res) => {
    return res.render('cadastro.ejs')
})

/** PAGE ALTERAÇÃO */
crud.get('/client/edit/:index', checkClientInArray, (req, res) => {
    const { index } = req.params;
    const cliente = clientes[index]
    return res.render('editar.ejs', {
        data: cliente,
        id: index
    })
})

/** CRIAR NOVO CLIENTE */
crud.post('/client/new', checkRequire, (req, res) => {
    const cliente = req.body
    clientes.push(cliente)
    return res.redirect('/clients')
})

/** ALTERAR UM CLIENTE */
crud.post('/client/edit/:index', checkRequire, checkClientInArray, (req, res) => {
    const { index } = req.params;
    const cliente = req.body
    clientes[index] = cliente;
        setTimeout(() => {
            return res.redirect(`/clients`)
    }, 2000);
})

/** APAGAR UM CLIENTE */
crud.post('/client/delete/:index',checkClientInArray, (req, res) => {
    const { index } = req.params;
    clientes.splice(index, 1)
    return res.redirect(`/clients`)
})

export { crud }