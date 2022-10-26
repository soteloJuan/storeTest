const sequelize  = require('../database/config');

const { DataTypes }  = require('sequelize');

const ProductSolds = sequelize.define('productSolds', {
    idProductSold:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    idReceipt:{
        type: DataTypes.STRING,
        allowNull:false
    },
    idProduct:{
        type: DataTypes.STRING,
        allowNull:false
    },
    units:{
        type: DataTypes.STRING,
        allowNull:false
    },
    totalSale:{
        type: DataTypes.FLOAT,
        allowNull:false
    }
},{
    timestamps: false
});

module.exports = { ProductSolds };
