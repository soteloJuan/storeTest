const { Router } = require('express');
const { create, getByIdProduct, getAllProduct, increaseStock, updateProduct, deleteProduct } = require('../controllers/product.controller');
const ValidationJWT = require('../common/middleware/validationJWT');

const jwtUser = ValidationJWT();

const router = Router();

router.post('/createProduct', create);
router.get('/getByIdProuct/:idProduct', getByIdProduct);
router.get('/getAllProducts', getAllProduct);
router.put('/increaseStock/:idProduct', increaseStock);
router.put('/updateProduct/:idProduct', updateProduct);
router.delete('/deleteProduct/:idProduct', deleteProduct);


module.exports = router;

/* Al finalizar solo agregamos el middleware*/
