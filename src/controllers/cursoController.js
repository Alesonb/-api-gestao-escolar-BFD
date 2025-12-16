const {Curso, Aluno} = require('../models');

module.exports = {
    async listar(req, res) {
        try {
            const cursos = await Curso.findAll();
            return res.status(200).json(cursos);
        } catch (e) {
            return res.status(500).json({erro: e.message});
        }
    }, 

    async buscarPorId(req, res) {
        try {
            const curso = await Curso.findByPk(req.params.id, {
            // Esta é a linha que traz os alunos
            include: { 
                model: Aluno, 
                through: { attributes: [] } // Limpa os dados extras da tabela de ligação
            }
        });

        if (!curso) {
            return res.status(404).json({ mensagem: "Curso não encontrado" });
        }
            return res.status(200).json(curso);
        } catch (e) {
            return res.status(500).json({erro: e.message});
        }
    },

    async criar(req, res) {
        try {
            // requisito: nome, cargaHoraria e modalidade são obrigatórios
            const novo = await Curso.create(req.body);
            return res.status(201).json(novo);
        } catch (e) {
            return res.status(400).json({erro: e.message});
        }
    }, 

    async atualizar(req, res) {
        try {
            await Curso.update(req.body, {where: {id: req.params.id}});
            return res.status(200).json({m: "Atualizado com sucesso"});
        } catch (e) {
            return res.status(500).json({erro: e.message});
        }
    },

    async excluir(req, res) {
        try {
            await Curso.destroy({where: {id: req.params.id}});
            return res.status(204).send();
        } catch (e) {return res.status(500).json({erro: e.message})};
    }
};