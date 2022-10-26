const { Router } = require('express');
const { create, login } = require('../controllers/user.controller');
const ValidationJWT = require('../common/middleware/validationJWT');

const jwtUser = ValidationJWT();

const router = Router();

router.post('/createUser',  jwtUser.validationJwtUser ,create);
router.get('/loginUser', login);

module.exports = router;
