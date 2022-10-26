const { Products } = require('../model/Products.Model');


class ProductsRepository{

    async create(idProduct, name, price, stock){
        try{
            await Products.create({idProduct, name, price, stock});
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async getByIdProduct(idProduct){
        try{
            const result = await Products.findByPk(idProduct);
            return result;
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async getAllProducts(){
        try{
            const result = await Products.findAll();
            return result;
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async updateStockField(idProduct, stock){
        try{
            await Products.update({stock}, {
                where:{
                    idProduct
                }
            });
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async updateProduct(idProduct,  name, price, stock){
        try{
            await Products.update({ name, price, stock}, {
                where:{
                    idProduct
                }
            });
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async deleteByIdProduct(idProduct){
        try{
            await Products.destroy( {
                where:{
                    idProduct
                }
            });
        }catch(error){
            throw new Error('Error in the System');
        }
    }



}

module.exports = { ProductsRepository };
