const funcionariosRepository = require("../repository/funcionarios.repository.js");

module.exports = {
    buscaTodos: async(req, res) => {
        const data = await funcionariosRepository
            .buscaTodos()
            .then((result) => result)
            .catch((error) => {
                res.status(500).send(error);
            });
        res.render("funcionarios", { data });
    },
    buscaPorId: async(req, res) => {
        const { id } = req.params;

        let data = await funcionariosRepository.buscaPorId(id)

        data = data[0]

        data.DATA_NSC = formataData(data.DATA_NSC);

        res.render("cadastro_funcionario", { data })
    },
    InserirFunc: async(req, res) => {
        var funcionario = req.body;

        console.log(funcionario);
        //if ternário
        funcionario.STATUS = funcionario.STATUS == "on";
        funcionario.CPF = funcionario.CPF.replaceAll(".", "").replaceAll("-", "");

        if (funcionario.ID == "") {
            funcionario.ID = null;
            await funcionariosRepository.InserirFunc(funcionario);
        } else {
            const { ID } = funcionario;
            await funcionariosRepository.atualizar(funcionario, ID);
        }

        res.redirect("/funcionarios/")


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
    buscaTodosDepdoFunc: async(req, res) => {
        const data = await funcionariosRepository
            .BuscaTodosDepdoFunc()
            .then((data) => data)
        res.render("dependentes", { data });
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
        res.render("cadastro_dependente", { data })
    },

    // InserirDep: async(req, res) => {
    //     var dependente = req.body;

    //     console.log(dependente);
    //     //if ternário
    //     dependente.STATUS = funcionario.STATUS == "on";
    //     funcionario.CPF = funcionario.CPF.replaceAll(".", "").replaceAll("-", "");

    //     if (funcionario.ID == "") {
    //         funcionario.ID = null;
    //         await funcionariosRepository.InserirFunc(funcionario);
    //     } else {
    //         const { ID } = funcionario;
    //         await funcionariosRepository.atualizar(funcionario, ID);
    //     }

    //     res.redirect("/funcionarios/")


    // }
};

function formataData(end_date) {
    var ed = new Date(end_date);
    var d = ed.getDate();
    var m = ed.getMonth() + 1;
    var y = ed.getFullYear();
    return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}