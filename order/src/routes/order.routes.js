import {Router} from 'express';
import upload from '../helpers/filehelper.js'
const router = Router()


import * as orderCtrl from '../controllers/order.controller.js'

router.get('/', orderCtrl.getOrder);

//router.post('/', upload.single('file'), orderCtrl.createOrder);
router.post('/', upload.array('files'), orderCtrl.createOrder);

router.put('/', orderCtrl.updateOrderById);
 
router.delete('/:contactsId', orderCtrl.deleteOrderById);

export default router;
