import * as express from 'express';
let router = express.Router()
import chirpsRouter from './chirps'

router.use('/chirps', chirpsRouter)

export default router