import { Sequelize, DataTypes } from 'sequelize';
import { getEnvVar } from '../utils/getEnvVar.js';
export const sequelize =  new Sequelize(
    getEnvVar('DB_NAME'),
    getEnvVar('DB_USER'),
    getEnvVar('DB_PASSWORD'),
{
   host: getEnvVar("DB_HOST"),
   port: getEnvVar("DB_PORT",3306),
   dialect: getEnvVar("DB_CONNECTION","mysql"),

})

export async function initializeDatabase() {
    try{
        await sequelize.authenticate();
        console.log("✅ Подключение к базе успешно");
        await sequelize.sync({ alter:true });
        console.log("✅ Таблицы синхронизированы");
        
    }
    catch(err){
            console.error("❌ Ошибка подключения или синхронизации:", err);
            throw err;

    }
    
}