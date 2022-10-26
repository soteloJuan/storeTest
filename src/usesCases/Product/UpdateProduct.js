const { ApplicationException } = require('../../common/exceptions/ApplicationException');
const { ProductsRepository } = require('../../persistance/inDatabaseProductRepository');

module.exports = () => ({

    Execute: async(idProduct, name, price, stock) => {

        const productsRepository = new ProductsRepository();

        const dataTemp = [idProduct, name, price, stock];

        for (const i in dataTemp) {
            if(!dataTemp[i]){
                throw new ApplicationException('All Data is Necessary ', 401);
            }
        }
        if(parseInt(stock) < 0){ throw new ApplicationException('Has to be a positive number ', 401); }

        
        const findByIdProduct = await productsRepository.getByIdProduct(idProduct);
        if(!findByIdProduct){ throw new ApplicationException('The Product Not Exists', 401); }

        await productsRepository.updateProduct(idProduct, name, price, stock);
        
        return {
            message: 'Product Updated Successfully',
            data: []
        }
    }

});
