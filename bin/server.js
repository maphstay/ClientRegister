import { app } from "../src/app.js"

const port = 3000

/** SERVER EXECUTOR */   
app.listen(port, () => console.log(`----Server Online on port ${port}-----`))