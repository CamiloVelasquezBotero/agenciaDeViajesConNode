import Sequelize from 'sequelize';
import db from '../config/db.js';

// modelo de la DB testimoniales
export const Testimonial = db.define('testimoniales', {

    nombre: {
        type: Sequelize.STRING 
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
});