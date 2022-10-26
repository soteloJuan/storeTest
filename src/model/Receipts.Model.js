const sequelize  = require('../database/config');
const { DataTypes }  = require('sequelize');

const { ProductSolds } = require('./ProductSolds.Model');

const Receipts = sequelize.define('receipts', {
    idReceipt:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    dateSale:{
        type: DataTypes.DATE,
        allowNull:false
    },
    totalSale:{
        type: DataTypes.FLOAT,
        allowNull:false 
    }
},{
    timestamps: false
});

Receipts.hasMany(ProductSolds, {
    foreignKey: 'idReceipt',
    sourceKey: 'idReceipt'
});

ProductSolds.belongsTo(Receipts, {
    foreignKey: 'idReceipt',
    targetKey:'idReceipt'
});


module.exports = { Receipts };


