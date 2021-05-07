import express from 'express'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'


const baseURL = ``
const app = express()
const openApi = YAML.load('./doc/openapi.yaml')

/** ENGINE DEFINITIONS */
app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/static', express.static('static'))

/** ROUTES */
import { baseRouter } from './routes/base.js'
import { api } from './routes/api.js'
import { crud } from './routes/crud.js'

/** BASEROUTER AND '/docs' */
app.use(`${baseURL}/`, baseRouter)
app.use(`${baseURL}/`, api)
app.use(`${baseURL}/`, crud)
app.use(`${baseURL}/api-docs`, swaggerUi.serve, swaggerUi.setup(openApi))

export { app }