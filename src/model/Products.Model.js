const sequelize  = require('../database/config');
const { DataTypes }  = require('sequelize');

const { ProductSolds } = require('./ProductSolds.Model');

const Products = sequelize.define('products', {
    idProduct:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps: false
});

Products.hasMany(ProductSolds, {
    foreignKey: 'idProduct',
    sourceKey: 'idProduct'
});

ProductSolds.belongsTo(Products, {
    foreignKey: 'idProduct',
    targetKey:'idProduct'
});


module.exports = { Products };
