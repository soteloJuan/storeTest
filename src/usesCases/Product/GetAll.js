const { ApplicationException } = require('../../common/exceptions/ApplicationException');
const { ProductsRepository } = require('../../persistance/inDatabaseProductRepository');

module.exports = () => ({

    Execute: async() => {

        const productsRepository = new ProductsRepository();
        const findAllProducts = await productsRepository.getAllProducts();
        
        return {
            message: 'Query Successful',
            data: findAllProducts
        }
    }

});
