const { Router } = require('express');
const { create,getAll } = require('../controllers/sales.controller');
const ValidationJWT = require('../common/middleware/validationJWT');

const jwtUser = ValidationJWT();

const router = Router();

router.post('/createSale', create);
router.get('/getAllSale', getAll);


module.exports = router;
