const express = require("express")
const http = require("http")
const path = require("path")
const {httpPort} = require("../config.json")

const publicFolderPath = path.join(path.dirname(__dirname), "public")

const app = express()
app.use(express.static(publicFolderPath))

app.get(/^(\/editor|\/widget)/, (request, response) =>
{
    response.sendFile(path.join(publicFolderPath, "index.html"))
})

http.createServer(app).listen(httpPort, () =>
{
    console.log(`The server is listening on port: ${httpPort}`)
})