const express = require("express");

const app = express();
const db = require("./db/models");

db.sequelize.sync({alter: true});
app.listen(8001, () => {
    console.log(`hola amigos!`)
});