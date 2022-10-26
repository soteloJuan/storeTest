const { Products } = require('../model/Products.Model');
const { ProductSolds } = require('../model/ProductSolds.Model');

class ProductSoldRepository{

    async create(idProductSold, idReceipt, idProduct, units, totalSale){
        try{
            await ProductSolds.create({idProductSold, idReceipt, idProduct, units, totalSale});
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async getAllByIdReceipt(idReceipt){
        try{
            const result = await ProductSolds.findAll({
                where:{
                    idReceipt
                },
                include:[Products
                ]
            });
            return result;
        }catch(error){
            throw new Error('Error in the System');
        }
    }
}

module.exports = { ProductSoldRepository };
