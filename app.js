const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve("public");
//Seleccion de la varaibale de entorno
const PORT = process.env.PORT || 3000;
app.use(express.static(publicPath));


app.get("/", (req,res)=>{
    res.sendFile(path.resolve("./views/home.html"));
});


app.get("/register", (req,res)=>{
    res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login", (req,res)=>{
    res.sendFile(path.resolve("./views/login.html"));
});

app.listen(PORT, ()=>{
    console.log(`Servidor Funcionando en el puerto ${PORT}`);
})