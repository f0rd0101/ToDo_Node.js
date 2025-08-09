import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize/sequalize.js';


const User = sequelize.define('User', {
    _id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
  
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1,20],
        },
    

    },
    gender:{
        type:DataTypes.ENUM('male','female'),
        allowNull:false,
    },



}, {
    timestamps:true,
    tableName:'users',
})
export default User;