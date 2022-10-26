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
        
        const findByIdProduct = await productsRepository.getByIdProduct(idProduct);
        if(findByIdProduct){ throw new ApplicationException('The Product Already Exists', 401); }
        
        await productsRepository.create(idProduct, name, price, stock);

        return {
            message: 'Product created successfully',
            data: []
        }
    }

});
