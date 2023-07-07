import Sequelize from 'sequelize';
import dotenv from 'dotenv/config'; // Variables de entorno

const db = new Sequelize('agenciaviajes', 'user', 'password', {
    host: '127.0.0.1', // la direccion que se usa es local
    port: '3306',
    dialect: 'mysql', 
    define: {
        timestamps: false 
    },
    pool: { // COnfiguraciones de sequalize
        max: 5, 
        min: 0, 
        acquire: 30000, 
        idle: 10000,
    },
    operatorAliases: false 
});

export default db;