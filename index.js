import express from 'express'; 
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv/config';

console.log(process.env.DB_HOST);

const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

//  Definir puerto:
const port = process.env.PORT || 4000; 

//  Habilitar Pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = 'Agencia de viajes'; 
    console.log(res.locals);
    next(); 
})

// importar body parser de express para poder leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//  Definir la carpeta publica
app.use(express.static('public'));

//  Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
}) 