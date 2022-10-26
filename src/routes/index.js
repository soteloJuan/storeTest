const { Router } = require('express');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const salesRoutes = require('./sales.routes');


const router = Router();

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/sales', salesRoutes);


module.exports = router;
