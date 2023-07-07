import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';
 
const paginaInicio = async (req, res) => { 

    const promiseDB = []; 
    promiseDB.push( Viaje.findAll({limit: 3}) ); 
    promiseDB.push( Testimonial.findAll({limit: 3}) );

    try{
        const resultado = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0], 
            testimoniales: resultado[1] 
        }); 
    } catch (error) {
        console.log(error);
    }

}
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res) => {
    // consultar los viajes en la DB
    const viajes = await Viaje.findAll(); 

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes 
    });
};
const paginaTestimoniales = async (req, res) => {

    try {
        // Consultar los tesimoniales en la DB
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
};

// Muestra un viaje por su Slug
const paginaDetalleViaje = async (req, res) => {

    const { viaje } = req.params; 

    try {
        const resultado = await Viaje.findOne({ where: { slug: viaje }}); 
        
        console.log
        res.render('viaje', { 
            pagina: 'Informacion Viaje',
            resultado
        })
    }catch (error) {
        console.log(error);
    }   
}
// Se exportan las rutas
export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}