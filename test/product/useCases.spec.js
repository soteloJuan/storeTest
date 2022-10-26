const UseCaseGetByIdProduct = require('../../src/usesCases/Product/GetByIdProduct');
const { ProductsRepository } = require('../../src/persistance/inDatabaseProductRepository');
jest.mock('../../src/persistance/inDatabaseProductRepository.js');


describe('UseCaseGetByIdProduct', () => {
    const expectProduct = {
        idProduct: "PANTS",
        name: "pants",
        price:10,
        stock: 100
    };

    beforeEach(() => {
        const mockGetByIdProduct = jest.fn();
        ProductsRepository.prototype.getByIdProduct = mockGetByIdProduct;
        mockGetByIdProduct.mockReturnValue(Promise.resolve(expectProduct));
    });
    
    test('Should return a Message Successful', async() => {
        const useCaseGetByIdProduct = UseCaseGetByIdProduct();
        const result = await useCaseGetByIdProduct.Execute('PANTS');
        expect('Query Successful').toBe(result.message);
    });

});

