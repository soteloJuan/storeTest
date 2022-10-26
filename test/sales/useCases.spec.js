
const UseCaseGetAll = require('../../src/usesCases/sales/GetAll');
const { ReceiptsRepository } = require('../../src/persistance/inDatabaseReceiptRepository');
const { ProductSoldRepository } = require('../../src/persistance/inDatabaseProductSoldRepository');

jest.mock('../../src/persistance/inDatabaseReceiptRepository');
jest.mock('../../src/persistance/inDatabaseProductSoldRepository');


describe('Login', () => {

    let expectReceipt =  [{
        dataValues : {
            idReceipt: 'jHcBmmM9bBS72I07RdvMp',
            dateSale: '2022-10-26',
            totalSale: 74.5
        },
        },{
        dataValues: {
            idReceipt: 'jHcBmmM9bBS72I07RdvMp',
            dateSale: '2022-10-26',
            totalSale: 74.5
        }
        }
    ];

    let expectProductSold = [
        {
            "idProductSold": "fG2I1hkoHDngJ2jcl91-j",
            "idReceipt": "jHcBmmM9bBS72I07RdvMp",
            "idProduct": "PANTS",
            "units": "3",
            "totalSale": 10,
            "product": {
            "idProduct": "PANTS",
            "name": "Pants",
            "price": 5,
            "stock": 100
            }
        },
        {
            "idProductSold": "wBsrKn_c8zS77-3WAmAo-",
            "idReceipt": "jHcBmmM9bBS72I07RdvMp",
            "idProduct": "TSHIRT",
            "units": "3",
            "totalSale": 57,
            "product": {
            "idProduct": "TSHIRT",
            "name": "T-Shirt",
            "price": 20,
            "stock": 103
            }
        },
        {
            "idProductSold": "y_2s731jDERS3TQhZcI00",
            "idReceipt": "jHcBmmM9bBS72I07RdvMp",
            "idProduct": "HAT",
            "units": "1",
            "totalSale": 7.5,
            "product": {
            "idProduct": "HAT",
            "name": "Hat",
            "price": 7.5,
            "stock": 100
            }
        }
    ];

    beforeEach(async() => {

        const mockGetAllReceipt = jest.fn();
        const mockGetAllByIdReceipt  = jest.fn();

        ReceiptsRepository.prototype.getAllReceipt = mockGetAllReceipt;
        mockGetAllReceipt.mockReturnValue(Promise.resolve(expectReceipt));

        ProductSoldRepository.prototype.getAllByIdReceipt = mockGetAllByIdReceipt;
        mockGetAllByIdReceipt.mockReturnValue(Promise.resolve(expectProductSold));
    });
    
    test('Should return Data', async() => {

        const useCaseGetAll = UseCaseGetAll();
        const result = await useCaseGetAll.Execute();

        expect('Query Successful').toBe(result.message);

    });



});
