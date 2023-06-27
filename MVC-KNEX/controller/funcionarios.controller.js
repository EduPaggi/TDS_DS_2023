const funcionariosRepository = require("../repository/funcionarios.repository.js");

module.exports = {
    buscaTodos: (req, res) => {
        funcionariosRepository
            .buscaTodos()
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        //Se não houver id ele aparece erro
        if (!id) {
            res.status(404).send({ msg: "Parâmetro ID obrigatório" })
        }

        funcionariosRepository
            .buscaPorId(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    InsertTeste: (req, res) => {
        funcionariosRepository
            .InserirTeste(req.body)
            .then((abobra) => {
                res.send({
                    Message: "Funcionário inserido com sucesso",
                    Message2: req.body,
                    Message3: abobra
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    },
    deletar: (req, res) => {
        const { id } = req.params;

        funcionariosRepository.deletar(id).then(() => {
                res.send({ msg: "Usuário deletado com sucesso!" })
            })
            .catch((error) => {
                res.status(500).send(erros);
            })
    },
    atualizar: (req, res) => {
        const funcionario = req.body;
        const { id } = req.params;

        funcionariosRepository
            .atualizar(funcionario, id)
            .then(() => {
                res.send({
                    msg: "Funcionário atualizado com sucesso",
                    funcionario,
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    buscaTodosDepdoFunc: (req, res) => {
        funcionariosRepository
            .BuscaTodosDepdoFunc()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    BuscaDepdoFunc: (req, res) => {
        const { id } = req.params;
        funcionariosRepository
            .BuscaDepdoFunc(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
};