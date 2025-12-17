# 📚 API de Gestão Escolar - Softex

Este projeto consiste em uma API REST para gerenciamento de Alunos, Cursos e Matrículas, permitindo a persistência de dados e relacionamentos N:N utilizando **Node.js**, **Express**, **Sequelize** e **SQLite**.

## 🚀 Como Executar o Projeto

### 1. Instalar dependências
No terminal, execute:
```bash
npm install
Para criar as tabelas no banco de dados:

Bash
npx sequelize-cli db:migrate

2. Rodar as Migrations
Para criar as tabelas no banco de dados:

Bash
npx sequelize-cli db:migrate

3. Iniciar o Servidor
Bash
node src/server.js
A API estará rodando em: http://localhost:3000

🛠️ Endpoints da API
Alunos
GET /alunos -> Lista todos os alunos.

GET /alunos/:id -> Detalha um aluno e seus cursos matriculados.

POST /alunos -> Cria um novo aluno.

DELETE /alunos/:id -> Remove um aluno específico.

Cursos
GET /cursos -> Lista todos os cursos.

GET /cursos/:id -> Detalha um curso e seus alunos matriculados.

POST /cursos -> Cria um novo curso.

DELETE /cursos/:id -> Remove um curso específico.

Matrículas (Relacionamento)
POST /matriculas -> Liga um aluno a um curso.

DELETE /matriculas/:id -> Remove uma matrícula específica.

✅ Testes Realizados
O projeto foi testado via Postman, cobrindo todas as funcionalidades exigidas:

Criação de Alunos e Cursos.

Vinculação de matrículas (Relacionamento N:N).

Consulta de alunos por curso e vice-versa.
