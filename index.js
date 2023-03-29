const express = require("express");
const app = express();
const usuario = require("./router/usuario-router");

const port = 3019;

app.use(express.json());
app.use("/usuario",usuario);

app.get("/", (req, res) => {
    res.send("teste");
})

app.get("/contato", (req, res) => {
    res.send("duardohenriqe19@gmail.com");
});

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`)
});