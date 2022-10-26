const { ApplicationException } = require('../../common/exceptions/ApplicationException');
const { ProductsRepository } = require('../../persistance/inDatabaseProductRepository');

module.exports = () => ({

    Execute: async(idProduct, units = 0) => {

        const productsRepository = new ProductsRepository();
        
        if(!idProduct){ throw new ApplicationException('idProduct Necessary ', 401); }

        units = parseInt(units);
        if(units < 0){ throw new ApplicationException('Has to be a positive number ', 401); }
        
        const findByIdProduct = await productsRepository.getByIdProduct(idProduct);
        if(!findByIdProduct){ throw new ApplicationException('The Product Not Exists', 401); }

        const oldUnits = parseInt(findByIdProduct.dataValues.stock);
        const newUnits = oldUnits + units

        const result = await productsRepository.updateStockField(idProduct, newUnits);
        
        return {
            message: 'Updated Successfully',
            data: result
        }
    }

});
