const UseCaseCreate = require('../usesCases/Product/Create');
const UseCaseGetByIdProduct = require('../usesCases/Product/GetByIdProduct');
const UseCaseGetAllProducts = require('../usesCases/Product/GetAll');
const UseCaseIncreaseStock = require('../usesCases/Product/IncreaseStock');
const UserCaseUpdateProduct = require('../usesCases/Product/UpdateProduct');
const UserCaseDeleteProduct = require('../usesCases/Product/DeleteByIdProduct');

const create = async(req, res, next) => {

    const { idProduct, name, price, stock } = req.body;

    const useCaseCreate = UseCaseCreate();
    useCaseCreate.Execute(idProduct, name, price, stock).then( (result) => {
        res.status(200).json({
                ok: true,
                message: result.message,
                data: result.data
        });
    }, (err) => {
        next(err)
    });
}

const getByIdProduct = async(req, res, next) => {

    const { idProduct }= req.params;

    const useCaseGetByIdProduct = UseCaseGetByIdProduct();
    useCaseGetByIdProduct.Execute(idProduct).then( (result) => {
        res.status(200).json({
                ok: true,
                message: result.message,
                data: result.data
        });
    }, (err) => {
        next(err)
    });
}

const getAllProduct = async(req, res, next) => {

    const useCaseGetAllProducts = UseCaseGetAllProducts();
    useCaseGetAllProducts.Execute().then( (result) => {
        res.status(200).json({
                ok: true,
                message: result.message,
                data: result.data
        });
    }, (err) => {
        next(err)
    });
}

const increaseStock = async(req, res, next) => {

    const { idProduct } = req.params;
    const { units } = req.body;

    const useCaseIncreaseStock = UseCaseIncreaseStock();

    useCaseIncreaseStock.Execute(idProduct, units).then( (result) => {
        res.status(200).json({
                ok: true,
                message: result.message,
                data: result.data
        });
    }, (err) => {
        next(err)
    });
}

const updateProduct = async(req, res, next) => {

    const { idProduct } = req.params;
    const { name, price, stock } = req.body;

    const userCaseUpdateProduct = UserCaseUpdateProduct();

    userCaseUpdateProduct.Execute(idProduct, name, price, stock).then( (result) => {
        res.status(200).json({
                ok: true,
                message: result.message,
                data: result.data
        });
    }, (err) => {
        next(err)
    });
}

const deleteProduct = async(req, res, next) => {

    const { idProduct } = req.params;

    const userCaseDeleteProduct = UserCaseDeleteProduct();

    userCaseDeleteProduct.Execute(idProduct).then( (result) => {
        res.status(200).json({
                ok: true,
                message: result.message,
                data: result.data
        });
    }, (err) => {
        next(err)
    });
}

module.exports = {
    create,
    getByIdProduct,
    getAllProduct,
    increaseStock,
    updateProduct,
    deleteProduct
}
