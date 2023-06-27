const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("funcionarios");
    },
    buscaPorId: (id) => {
        return con.select().from("funcionarios").where("id", "=", id);
    },
    InserirTeste: (body) => {
        return con('funcionarios').insert(body).into('funcionarios');
    },
    deletar: (id) => {
        return con("funcionarios").where({ id: id }).del();
    },
    atualizar: (funcionario, id) => {
        return con("funcionarios").update(funcionario).where({ id: id });
    },
    BuscaTodosDepdoFunc: () => {
        return con("funcionarios").innerJoin(
            "dependentes",
            "funcionarios.id",
            "dependentes.funcionario_id");
    },
    BuscaDepdoFunc: (id) => {
        return con.select("FUN.ID",
                "FUN.NOME AS NOME_FUNCIONARIO",
                "DEP.NOME AS NOME_DEPENDENTE",
                "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
            ).from("funcionarios as FUN")
            .innerJoin("Dependentes as DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
            .where("FUN.ID", id)
    }
};