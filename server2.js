const express = require("express")
const { port_server2 } = require("./src/config")
const router = require("./src/router")

const app = express()

app.use(router)

app.listen(port_server2, () => {
    console.log("server is running at port", port_server2)
})
