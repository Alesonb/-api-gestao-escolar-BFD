// conexão principal com o banco de dados SQlite

const SQlite3 = require("sqlite3").verbose();

const db = new SQlite3.Database("./src/database/database.sqlite", (erro) => {
    if (erro) {
        console.error("Erro ao conectar com o banco SQlite:", erro);
    } else {
        console.log("Conexão com SQlite realizada com sucesso!");
    }
});

module.exports = db;