const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");

require('dotenv/config');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.use(session({

  secret: 'ifpe',
  saveUninitialized: false,
  resave: false

}));

mongoose.connect(process.env.MONGO_URI);


const policialRoutes = require("./routes/policialRoutes");
const ocorrenciaRoutes = require("./routes/ocorrenciaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const Usuario = require("./models/Usuario");


app.get("/", (req, res) => {

    if(req.session.usuario){
          res.render("index");
      
    }else {
          res.redirect("/usuarios/login")
   }         
});


app.use(policialRoutes);
app.use(ocorrenciaRoutes);
app.use(usuarioRoutes);


app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(process.env.PORT, () => {
  console.log("Rodando");
});

