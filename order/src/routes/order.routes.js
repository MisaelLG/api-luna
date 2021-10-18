import {Router} from 'express';
import upload from '../helpers/filehelper.js'
const router = Router()


import * as orderCtrl from '../controllers/order.controller.js'



router.post('/', upload.single('file') , orderCtrl.createOrder)
 
router.delete('/:contactsId', orderCtrl.deleteContactsById);


export default router;
