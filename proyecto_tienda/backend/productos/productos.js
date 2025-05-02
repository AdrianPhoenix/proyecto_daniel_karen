const express = require("express")

const db = require("../databases/db")

const router = express.Router()

router.get("/", (req, res)=>{
    const query = "SELECT * FROM productos"

    db.query(query, (err, results)=>{
        res.json(results)
    })
})


router.post("/", (req, res)=>{
    const {img_producto, producto, price} = req.body

    const query = "INSERT INTO productos SET ?"


    const nuevoProducto = {
        img_producto,
        producto,
        price
    }

    db.query(query, nuevoProducto, (err, result) => {
        res.status(201).json({message: "Producto ingresado exitosamente", idProducto: res.result})
    })




})


module.exports = router