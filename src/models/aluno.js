'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    static associate(models) {
      Aluno.belongsToMany(models.Curso, {
        through: models.Matricula,
         foreignKey: "alunoId"
      });
    }
  }
  Aluno.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    }
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  
  return Aluno;
};