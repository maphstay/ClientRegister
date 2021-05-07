import { app } from "./app.js"

const port = 3000

// ----- EXECUÇÃO DO SERVIDOR -----    
app.listen(port, () => console.log(`----Server Online on port ${port}-----`))