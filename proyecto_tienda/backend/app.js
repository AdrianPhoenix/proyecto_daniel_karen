const express = require("express")
const productosRoutes = require("./productos/productos")
const newProduct = require("./productos/new_product")
const cors = require("cors")

const app = express()
const port = 4000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Bienvenidos a la API!!!")
})

app.use("/productos", productosRoutes)
app.use("/new_product", newProduct)


app.listen(port, () =>{
    console.log(`Servidor Ejecutandose en: http://localhost:${port}`)
})

