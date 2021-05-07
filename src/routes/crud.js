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

/** PAGE REGISTER */
crud.get('/client/new', (req, res) => {
    return res.render('cadastro.ejs')
})

/** PAGE ALTERATION */
crud.get('/client/edit/:index', checkClientInArray, (req, res) => {
    const { index } = req.params;
    const cliente = clientes[index]
    return res.render('editar.ejs', {
        data: cliente,
        id: index
    })
})

/** CREATE NEW CLIENT */
crud.post('/client/new', checkRequire, (req, res) => {
    const cliente = req.body
    clientes.push(cliente)
    return res.redirect('/clients')
})

/** ALTER CLIENT */
crud.post('/client/edit/:index', checkRequire, checkClientInArray, (req, res) => {
    const { index } = req.params;
    const cliente = req.body
    clientes[index] = cliente;
        setTimeout(() => {
            return res.redirect(`/clients`)
    }, 2000);
})

/** DELETE CLIENT */
crud.post('/client/delete/:index',checkClientInArray, (req, res) => {
    const { index } = req.params;
    clientes.splice(index, 1)
    return res.redirect(`/clients`)
})

export { crud }