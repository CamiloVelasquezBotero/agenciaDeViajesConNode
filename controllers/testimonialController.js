import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {

    // Se valida el formulario
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El Nombre esta vacio'});
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El Correo esta vacio'});
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El Mensaje esta vacio'});
    }

    if(errores.length) {
        // Consultar testimoniales existentes en la DB
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // Se almacena el testimonial en la DB:
        try {
            await Testimonial.create({ 
                nombre,
                correo,
                mensaje
            }); 

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial,
}