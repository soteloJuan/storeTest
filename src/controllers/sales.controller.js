const UseCaseCreate = require('../usesCases/sales/Create');
const UseCaseGetAll = require('../usesCases/sales/GetAll');


const create = async(req, res, next) => {

    const { products } = req.body;

    const useCaseCreate = UseCaseCreate();
    useCaseCreate.Execute(products).then( (result) => {
    res.status(200).json({
            ok: false,
            message: result.message,
            data: result.data,
            total: result.totalToPay
    });
    }, (err) => {
        next(err)
    });
}


const getAll = async(req, res, next) => {

    const useCaseGetAll = UseCaseGetAll();
    useCaseGetAll.Execute().then( (result) => {
    res.status(200).json({
            ok: false,
            message: result.message,
            data: result.data,
    });
    }, (err) => {
        next(err)
    });

}


module.exports = {
    create,
    getAll
}