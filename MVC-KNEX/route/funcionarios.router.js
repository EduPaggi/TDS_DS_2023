const express = require("express");
const funcionariosController = require("../controller/funcionarios.controller");
const funcionariosRepository = require("../repository/funcionarios.repository");

const routes = new express.Router();

routes.get("/", funcionariosController.buscaTodos);
routes.get("/:id([0-9]+)", funcionariosController.buscaPorId);
routes.post("/insertfunc", funcionariosController.InsertTeste);
routes.delete("/:id([0-9]+)", funcionariosController.deletar);
routes.put("/:id([0-9]+)", funcionariosController.atualizar);
routes.get("/dependente", funcionariosController.buscaTodosDepdoFunc);
routes.get("/dependente/:id([0-9]+)", funcionariosController.BuscaDepdoFunc);



module.exports = routes;