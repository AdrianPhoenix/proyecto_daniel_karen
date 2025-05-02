const express = require("express");
const multer = require("multer");
const db = require("../databases/db");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const upload = multer({ dest: "../uploads/" });

router.post("/", upload.single("image"), (req, res) => {
  const { producto, precio } = req.body;
  const image = req.file;

  const newFileName = `${Date.now()}-${image.originalname}`;
  const newFilePath = path.join(__dirname, "../uploads", newFileName);

  //   if (!producto || !precio || !image) {
  //     return res.status(400).send("Todos los campos son obligatorios");
  //   }

  // Aquí puedes guardar los datos en una base de datos
  console.log("Producto:", producto);
  console.log("Precio:", precio);
  console.log("Imagen:", image);
  console.log("Ruta:", newFilePath);
  console.log("nroCharacter", newFilePath.length )

  fs.rename(image.path, newFilePath, (err) => {
    if (err) {
      console.error("Error al renombrar el archivo:", err);
      return res.status(500).send("Error al procesar la imagen");
    }

    console.log("Archivo renombrado y guardado en:", newFilePath);

    // Aquí puedes guardar los datos en la base de datos
    db.query(
      "INSERT INTO productos (img_producto, producto, price) VALUES (?, ?, ?)",
      [newFilePath, producto, precio],
      (err, result) => {
        if (err) {
          console.error("Error al guardar en la base de datos:", err);
          return res.status(500).send("Error al guardar el producto");
        }
        res.status(200).send("Producto guardado con éxito");
      }
    );
  });

});

module.exports = router;
