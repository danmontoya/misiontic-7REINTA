import {Router} from 'express'
import {createProduct, getProducts, getProductById, updateProductById, deleteProductById} from '../controllers/products.controller'
import {authJwt} from '../middlewares/index'

const router = Router()

router.get('/', getProducts)
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], createProduct)
router.get('/:productId', getProductById)
router.put('/:productId', authJwt.verifyToken, updateProductById)
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], deleteProductById)

export default router;