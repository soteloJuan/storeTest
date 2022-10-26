const { ApplicationException } = require('../../common/exceptions/ApplicationException');
const { ProductsRepository } = require('../../persistance/inDatabaseProductRepository');

module.exports = () => ({

    Execute: async(idProduct) => {

        const productsRepository = new ProductsRepository();
        
        if(!idProduct){ throw new ApplicationException('idProduct Necessary ', 401); }
        
        const findByIdProduct = await productsRepository.getByIdProduct(idProduct);
        if(!findByIdProduct){ throw new ApplicationException('The Product Not Exists', 401); }

        await productsRepository.deleteByIdProduct(idProduct);
        
        return {
            message: 'Product Deleted Successful',
            data: []
        }
    }

});
