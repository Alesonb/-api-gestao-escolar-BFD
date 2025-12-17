const {Aluno, Curso} = require('../models');

module.exports = {
    async listar(req, res) {
        try {
            const alunos = await Aluno.findAll();
            return res.status(200).json(alunos);
        }   catch (e) {
            return res.status(500).json({e: error.message});
        }
    },

    async buscarPorId(req, res) {
        try {
            const aluno = await Aluno.findByPk(req.params.id, {
                include: {model: Curso, through: {attributes: []}} // traz os cursos sem poluir com dados da tabela pivô
            });
            if (!aluno) return res.status(404).json({mensagem: "Aluno não encontrado"});
            return res.status(200).json(aluno);
        }   catch (e) {
            return res.status(500).json({erro: e.message});
        }
    },

    async criar(req, res) {
        try {
            const novoAluno = await Aluno.create(req.body); // req.body deve ter nome e email
            return res.status(201).json(novoAluno)
        }   catch (e) {
            return res.status(400).json({e: error.message});
        }
    },

    async atualizar(req, res) {
        try {
            const [Atualizado] = await Aluno.update(req.body, {
                where: {id: req.params.id}
            });
            if (Atualizado) {
                const alunoAtualizado = await Aluno.findByPk(req.params.id);
                return res.status(200).json(alunoAtualizado);
            }
            return res.status(404).json({mensagem: "Aluno não encontrado"});
        }   catch (e) {
            return res.status(500).json({erro: e.message});
        }
    },

    async excluir(req, res) {
        try {
            const excluido = await Aluno.destroy({
                where: {id: req.params.id}
            });
            if (excluido) return res.status(204).send();
            return res.status(404).json({mensagem: "Aluno não encontrado"});
        }   catch (e) {
            return res.status(500).json({erro: e.message});
        }
    }
};