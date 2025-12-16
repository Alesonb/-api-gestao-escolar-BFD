const express = require('express');
const db = require('./models');

// importando as rotas
const alunosRoutes = require('./routes/alunosRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const matriculaRoutes = require('./routes/matriculaRoutes');

const app = express();
app.use(express.json()); // obrigatório para o seu POST e PUT funcionarem

// definindo os caminhos (endpoints)
app.use('/alunos', alunosRoutes);
app.use('/cursos', cursoRoutes);
app.use('/matriculas', matriculaRoutes);

const PORT = 3000;

// sincroniza o banco SQLite e sobe o servidor
db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});