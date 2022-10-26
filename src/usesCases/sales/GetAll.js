const { ApplicationException } = require('../../common/exceptions/ApplicationException');
const { ReceiptsRepository } = require('../../persistance/inDatabaseReceiptRepository');
const { ProductSoldRepository } = require('../../persistance/inDatabaseProductSoldRepository');


module.exports = () => ({

    Execute: async() => {

        const receiptsRepository = new ReceiptsRepository();
        const productSoldRepository = new ProductSoldRepository();

        const findAllReceipts = await receiptsRepository.getAllReceipt();
        const newArray = [];
        for (const index in findAllReceipts) {
            const objectTemp = findAllReceipts[index].dataValues;
            const resultAllProductSold = await productSoldRepository.getAllByIdReceipt(objectTemp.idReceipt);

            objectTemp.ProductsSold = resultAllProductSold
            newArray.push(objectTemp);
        }
        
        
        return {
            message: 'Query Successful',
            data: newArray
        }
    }

});
