import express from 'express'
import env from 'dotenv'
import morgan from 'morgan';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './src/routes/router.js';


env.config()
const app = express();
const fileName = fileURLToPath;
const __dirname = dirname;


//Middelware.
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());


// Rutas.
app.use('/', router);





app.listen(process.env.PORT, ()=> {
    console.log(`******************************`)
    console.log(`Server connected on port ${process.env.PORT}`)
    console.log(`   ***  _____________ ***`)
})