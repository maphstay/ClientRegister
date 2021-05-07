/** ARRAY OF CLIENTS */
const clientes = []

/** GLOBAL FUNCTIONS AND VALIDATIONS */
function checkRequire(req, res, next) {
    if (!req.body.CNPJ || !req.body.RS || !req.body.contato || 
        !req.body.telefone || !req.body.end || 
        !req.body.num || !req.body.bairro || 
        !req.body.cidade || !req.body.uf || 
        !req.body.cep) {
        return res.status(400).send("<h1 style='text-align: center; color: red;'>ERRO: Preencha os campos</h1>")
    }
    return next()
}

function checkClientInArray(req, res, next) {
    const cliente = clientes[req.params.index];
    if (!cliente) {
        return res.status(404).send("<h1 style='text-align: center; color: red;'>ERRO: Cliente não existe</h1>");
    } 
    req.cliente = cliente
    next()
}

export { clientes, checkRequire, checkClientInArray }