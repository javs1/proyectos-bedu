import express from 'express'
import controller from '../controllers/main_controller'
const router = express.Router()

/* GET home page. */
router.get('/', controller.index)
router.get('/new', controller.new)
router.post('/', controller.create)
router.get('/recurso/edit', controller.edit)
router.put('/recurso', controller.update)
router.patch('/recurso', controller.update)
router.delete('/recurso', controller.destroy)

module.exports = router
