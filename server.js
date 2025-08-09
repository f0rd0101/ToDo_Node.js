import express from "express";
import {getEnvVar} from "./utils/getEnvVar.js";
import { initializeDatabase } from "./sequelize/sequalize.js";
import User from './models/User.js'


const app = express();

const PORT = getEnvVar('PORT', 3306);

(async()=>{
    try{
     await initializeDatabase();

     app.listen(PORT, ()=>{
    console.log("Server successfully started");
});
    }
    catch(err){
         console.error("❌ Ошибка инициализации базы данных:", err);

    }
})();



