import express from 'express'
import controller from '../controllers/upload.controller.js'
import uploadMiddleware from '../utils/handleStorage.js'

const routerUpload = express.Router()



routerUpload.post('/', uploadMiddleware.single('foto') , controller.uploadImagen)

export default routerUpload