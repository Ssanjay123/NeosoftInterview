const sequelize = require('../util/db');

const Sequelize = require('sequelize');

const user = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
  body:{
    type:Sequelize.STRING
  }
});

module.exports = user;