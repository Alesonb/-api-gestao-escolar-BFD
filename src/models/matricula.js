'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Aluno, { foreignKey: 'alunoId' });
      Matricula.belongsTo(models.Curso, { foreignKey: 'cursoId' });
    }
  }
  Matricula.init({
    dataMatricula: {
      type: DataTypes.DATE,
      allowNull: false
    },
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Alunos",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    cursoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Cursos",
        key: 'id'
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Matricula',
  });

  return Matricula;
};