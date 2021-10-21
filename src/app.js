import express from "express";
import path from 'path';
import multer from "multer";
import morgan  from 'morgan'
import { createRoles } from "./libs/initialSetup.js";
import { v4 as uuidv4 } from 'uuid';

    
const app = express()
createRoles()

// const storagedoc = multer.diskStorage({
//     destination: path.join('docs'), 
//     filename:(req, file, cb)=>{
//         cb(null, uuidv4() + path.extname(file.originalname))
//     }
// });

const storage = multer.diskStorage({
    destination: path.join('img/avatar'), 
    filename:(req, file, cb)=>{
        cb(null, uuidv4() + path.extname(file.originalname))
    }
});


import productsRoutes from './routes/contacts.routes.js'
import authRutes from './routes/auth.routes.js'
import uploadRutes from './routes/upload.routes.js'

//middlewares
app.use (morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use (multer({storage,}).single('upl'));



app.get('/', (req, res)=>{
    res.json('welcome')
});

app.use('/api/upload/', uploadRutes)
app.use('/api/contacts',productsRoutes);
app.use('/api/auth', authRutes);

export default app;