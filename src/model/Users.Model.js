const sequelize  = require('../database/config');
const { DataTypes }  = require('sequelize');

const Users = sequelize.define('users', {
    idUser:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps: false
});

module.exports = { Users };
