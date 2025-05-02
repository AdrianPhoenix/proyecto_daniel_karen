const mysql = require("mysql")

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "prueba"
}

const connection = mysql.createConnection(dbConfig)

connection.connect(err => {
    if(err){
        console.log("Error al conectar a la bd")
        return;
    }

    console.log("Conexión establecida con la bd")
})

module.exports = connection