const UseCaseCreate = require('../usesCases/User/Create');
const UseCaseLogin = require('../usesCases/User/Login');

const create = async(req, res, next) => {

    const {email, password } = req.body;

    const useCaseCreate = UseCaseCreate();
    useCaseCreate.Execute(email, password).then( (result) => {

    res.status(200).json({
            ok: true,
            message: result.message,
            data: result.data
    });
    }, (err) => {
        next(err)
    });
}

const login = async(req, res, next) => {
    const {email, password } = req.body;

    const useCaseLogin = UseCaseLogin();
    useCaseLogin.Execute(email, password).then( (result) => {
        res.status(200).json({
                ok: true,
                message: result.message,
                data: result.data,
                token: result.token
        });
    }, (err) => {
        next(err)
    });
}

module.exports = {
    create,
    login
}
