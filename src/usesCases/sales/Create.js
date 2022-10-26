const { nanoid } = require('nanoid/async');
const { ApplicationException } = require('../../common/exceptions/ApplicationException');
const { ReceiptsRepository } = require('../../persistance/inDatabaseReceiptRepository');
const { ProductsRepository } = require('../../persistance/inDatabaseProductRepository');
const { ProductSoldRepository } = require('../../persistance/inDatabaseProductSoldRepository');

// helpers
const { filterProducts } = require('../../common/helpers/filterProducts');
const { totalPriceProduct } =  require('../../common/helpers/totalPriceProduct');

module.exports = () => ({

    Execute: async(products = []) => {

        let totalToPay = 0;
        const receiptsRepository = new ReceiptsRepository();
        const productsRepository = new ProductsRepository();
        const productSoldRepository = new ProductSoldRepository();


        if(products.length < 1 ){ throw new ApplicationException('You must send at least one product', 401); }

        const objectProducts =  await filterProducts(products);
        const arrayKeys = Object.keys(objectProducts);
        const arrayValues = Object.values(objectProducts);

        let arrayProducts = [];

        for (const i in arrayKeys) {
            const units = arrayValues[i];
            const name = arrayKeys[i];
            const resultProduct = await productsRepository.getByIdProduct(name);
            const stock = resultProduct.dataValues.stock;
            const price = resultProduct.dataValues.price;
            if(units > stock){ throw new ApplicationException(`Not enought ${name} merchandise`, 401); }

            const totalPriceProdTemp = await totalPriceProduct({name, units, price});
            totalToPay += totalPriceProdTemp;
            arrayProducts.push({name, units, price, total: totalPriceProdTemp});
        }

        const idReceipt = await nanoid();
        const date = new Date();
        await receiptsRepository.create(idReceipt, date, totalToPay);

        for (const i in arrayProducts) {
            const idProductSold = await nanoid();
            await productSoldRepository.create(idProductSold, idReceipt, arrayProducts[i].name, arrayProducts[i].units, arrayProducts[i].total);
        }

    
        return {
            message: 'User created successfully',
            data: arrayProducts,
            totalToPay
        }
    }

});
