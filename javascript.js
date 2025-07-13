// 1. Seleccionamos el botón de nuestro HTML usando su ID

const boton = document.getElementById('miBoton');



// 2. Definimos una función que se ejecutará cuando se haga clic en el botón

function cambiarColor() {

    // Obtenemos el color de fondo actual del botón

    const colorActual = boton.style.backgroundColor;



    // 3. Comprobamos el color actual y lo cambiamos por otro

    if (colorActual === 'rgb(0, 123, 255)' || colorActual === '#007bff') {

        // Si es azul (el color inicial), lo cambiamos a verde

        boton.style.backgroundColor = '#28a745'; // Un verde vibrante

    } else {

        // Si no es azul, lo volvemos a cambiar a azul

        boton.style.backgroundColor = '#007bff';

    }

}



// 4. Le decimos al botón que "escuche" los clics y ejecute nuestra función

boton.addEventListener('click', cambiarColor);



const parrafo = document.getElementById('parrafoOculto');

    const botonAlternar = document.getElementById('botonAlternar');



    botonAlternar.addEventListener('click', () => {

        if (parrafo.style.display === 'none') {

            parrafo.style.display = 'block'; // Muestra el párrafo

        } else {

            parrafo.style.display = 'none'; // Oculta el párrafo
        }

    });




const titulo = document.getElementById('tituloMensaje');

    const botonCambiarTexto = document.getElementById('botonCambiarTexto');



    botonCambiarTexto.addEventListener('click', () => {

        if (titulo.textContent === 'Hola, Mundo!') {

            titulo.textContent = '¡Mensaje Cambiado!';

        } else {

            titulo.textContent = 'Hola, Mundo!';

        }

    });



const miImagen = document.getElementById('miImagen');

    const botonCambiarImagen = document.getElementById('botonCambiarImagen');

    let esImagen1 = true;



    botonCambiarImagen.addEventListener('click', () => {

        if (esImagen1) {

            miImagen.src = "https://plus.unsplash.com/premium_photo-1711031505781-2a45c879ceac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW0lQzMlQTFnZW5lcyUyMGltcHJlc2lvbmFudGVzfGVufDB8fDB8fHww";

        } else {

            miImagen.src = "https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png";

        }

        esImagen1 = !esImagen1; // Invierte el estado

    });


