const express = require("express")
const { port } = require("./src/config")
const router = require("./src/router")

const app = express()

app.use(router)

app.listen(port, () => {
    console.log("server is running at port", port)
})
