const {Matricula, Aluno, Curso} = require('../models');

module.exports = {
    async listar(req, res) {
        try {
            // retorna as matrículas incluindo os nomes do Aluno e do Curso
            const lista = await Matricula.findAll ({
                include: [
                    {model: Aluno, attributes: ['nome']},
                    {model: Curso, attributes: ['nome']}
                ]
            });
            return res.status(200).json(lista);
        }   catch (e) {
            return res.status(500).json({erro: e.message});
        }
    },

    async criar(req, res) {
        try {
            const {alunoId, cursoId, dataMatricula} = req.body;

           // cria a relação na tabela intermediária 
            const nova = await Matricula.create({
                alunoId,
                cursoId,
                dataMatricula: dataMatricula || new Date()
            });
            return res.status(201).json(nova);
        }   catch (e) {
            return res.status(400).json({erro: e.message});
        }
    },
    
    // os métodos buscarPorId, atualizar e excluir seguem a mesma lógica do CursoController
    async buscarPorId(req, res) {
        try {
            const matricula = await Matricula.findByPk(req.params.id, {
                include: [
                    {model: Aluno, attributes: ['nome', 'email']},
                    {model: Curso, attributes: ['nome', 'modalidade']}
                ]
            });

            if (!matricula) return res.status(404).json({mensagem: "Matrícula não encontrada"})
            return res.status(200).json(matricula);
        }   catch (error) {
            return res.status(500).json({erro: error.message});
        }
    },

    async atualizar(req, res) {
        try {
            // aqui permite atualizar, por exemplo, a data da matrícula
            const [Atualizado] = await Matricula.update(req.body, {
                where: {id: req.params.id}
            });

            if (Atualizado) {
                const matriculaAtualizada = await Matricula.findByPk(req.params.id);
                return res.status(200).json(matriculaAtualizada);
            }
            return res.status(400).json({mensagem: "Matrícula não encontrada"});
        }  catch (error) {
            return res.status(500).json({erro: error.message});
        }
    },

    async excluir(req, res) {
        try {
            const excluido = await Matricula.destroy({where: {id: req.params.id}});
            if (excluido) return res.status(204).send();
            return res.status(404).json({mensagem: "Matrícula não encontrada"});
        }   catch (error) {
            return res.status(500).json({erro: error.message});
        }
    }
}