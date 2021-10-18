import express from "express";
import path from 'path';
import multer from "multer";
import morgan  from 'morgan'
import { request, Router } from "express";
const router = Router()


// import Contacts from '../models/Contacts.js'

// //import * as uploadCrtl from "../controllers/upload.controller.js"

 router.post('/',(req, res) =>{
    const storage = multer.diskStorage({
        destination: path.join('../docs'), 
        filename:(req, file, cb)=>{
            cb(null, uuidv4() + path.extname(file.originalname))
        }
    });
    
    router.use (multer({storage,}).single('doc'));
     res.json("Upload")
     console.log(req.file);
 })
 export default router;