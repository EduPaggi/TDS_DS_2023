const express = require("express");
//const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.get("/sucesso", (request, response) => {
    response.send({ data: "Çuçéçuh!" });

});

app.post("/login", (request, response) => {
    //const usuario = request.body.usuario;
    //const senha = request.body.senha;
    const { senha, user } = request.body;

    response.send({
        resposta: "Autenticação realizada com sucesso!",
        data    : `${user} - ${senha}`
    });
})

app.listen(8080, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Deboa");
    }

});