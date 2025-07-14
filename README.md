# Pagina a crear
Se crea un html, un javascript y un style para que se pueda crear la pagina, que esta basada en un una explicacion del github.

---------------

# Descripcion del proyecto 

Lo primero que se realizo es la creacion de un html para colocar la informacion basica sobre el uso de Githud, con esto se defino ¿Que es github?, ¿Para que sirve? y las ventajas que tiene de utilizarlo, y por ultimo se coloco un link para que puedan ir directamente a la pagina principal de Github.

---------------

# codigo

```css
body {       
    font-family: 'Segoe UI', sans-serif;
    background-color: rgb(5, 15, 21);
    max-width: auto;
    color: black;
    margin: 0;
    padding: 20px;
    line-height: 1.6;
    text-align: center; /* Centra el texto horizontalmente */
}

h1 {
    font-size: 2.5em;
    margin-bottom: 10px;    
    color: red;
    
}

h2 {
    margin: 20px 0; /* Espaciado vertical */
    color: red;
}
p {
    margin: 20px auto;
    max-width: 1200px; /* Opcional: limita el ancho del párrafo */
}
/* Bordes de los div para que no ocupen la pantalla*/
.demo-container {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
/* bordes de la imagen*/
img {
    border-radius: 20px;
    }
/* pie de pagina*/
footer {
    background-color: aliceblue;
    text-align: center;
    padding: 15px 0;
    border-radius: 10px;
}

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividad Githud</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="img/descarga.png" alt="imagen de GitHub">
    </header>
    <main>
        <div class=" demo-container">
            <h1>Githud</h1>
            <p>Es una plataforma basada en la nube que utiliza Git para el control de versiones y la colaboración en proyectos de softwar</p>
        </div>
        <div class="demo-container">
            <h2>Para que sirve</h2>
            <p>Es un servicio que permite a los desarrolladores almacenar, compartir y trabajar juntos en código, a la vez que realizan un seguimiento de los cambios. GitHub facilita la colaboración en proyectos, especialmente los de código abierto, y actúa como una red social para desarrolladores.</p>
        </div>
        <div class="demo-container">
            <h2><b>Aloja repositorios Git:</b></h2>
            <p>Los repositorios son carpetas donde se pueden guardar los diferentes código y tambien para visualiar el historial de cambios de un proyecto.</p>
            <h2><b>Facilita la colaboración:</b></h2>
            <p>Permite a varios desarrolladores trabajar en el mismo proyecto de forma simultánea, gestionando conflictos y cambios de manera eficiente en un proyecto.</p>
            <h2><b>Ofrece herramientas de gestión de proyectos:</b></h2>
            <p>Proporciona herramientas como issues (para reportar errores o problemas), pull requests (para proponer cambios) y wikis para documentación del codigo.</p>
            <h2><b>Es una plataforma social:</b></h2>
            <p>Permite a los desarrolladores descubrir proyectos, seguir a otros usuarios y organizaciones, y construir su reputación profesional.</p>
            <h2><b>Tiene opciones de pago:</b></h2>
            <p>Ofrece planes gratuitos para proyectos públicos y planes de pago para proyectos privados y funcionalidades adicionales.</p>
        </div>
        <div class="demo-container">
            <p>En resumen, GitHub es una de las herramienta especiales y fundamental hoy en dia por todas las fucionalidades con las que cuenta para el desarrollo de software moderno, tanto como para la creacion de proyectos independientes o con colaboradores, y por estos motivos se ha convertido en una parte importante de la comunidad en todo el mundo.</p>
        </div>
    </main>
    <footer>
        <a href="https://github.com/" target="_blank"> GitHub</a>
    </footer>
</body>
</html>
```
# JAVASCRIPT 13/07/2025
Se aporta el codigo de javascript aportando ejemplos de uso, se modifico el html, css y javascript


---------------
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividad Github</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="img/descarga.png" alt="imagen de GitHub">
    </header>
    <main>
        <div class=" demo-container">
            <h1>Github</h1>
            <p>Es una plataforma basada en la nube que utiliza Git para el control de versiones y la colaboración en proyectos de softwar</p>
        </div>
        <div class="demo-container">
            <h2>Para que sirve</h2>
            <p>Es un servicio que permite a los desarrolladores almacenar, compartir y trabajar juntos en código, a la vez que realizan un seguimiento de los cambios. GitHub facilita la colaboración en proyectos, especialmente los de código abierto, y actúa como una red social para desarrolladores.</p>
        </div>
        <div class="demo-container">
            <h2><b>Aloja repositorios Git:</b></h2>
            <p>Los repositorios son carpetas donde se pueden guardar los diferentes código y tambien para visualiar el historial de cambios de un proyecto.</p>
            <h2><b>Facilita la colaboración:</b></h2>
            <p>Permite a varios desarrolladores trabajar en el mismo proyecto de forma simultánea, gestionando conflictos y cambios de manera eficiente en un proyecto.</p>
            <h2><b>Ofrece herramientas de gestión de proyectos:</b></h2>
            <p>Proporciona herramientas como issues (para reportar errores o problemas), pull requests (para proponer cambios) y wikis para documentación del codigo.</p>
            <h2><b>Es una plataforma social:</b></h2>
            <p>Permite a los desarrolladores descubrir proyectos, seguir a otros usuarios y organizaciones, y construir su reputación profesional.</p>
            <h2><b>Tiene opciones de pago:</b></h2>
            <p>Ofrece planes gratuitos para proyectos públicos y planes de pago para proyectos privados y funcionalidades adicionales.</p>
        </div>
            <div class="demo-container">
        <h1>Javascript</h1>
        <p>Es un lenguaje de programación que se utiliza para agregar interactividad y dinamismo a las páginas web.</p>

        <h1>Algunos ejemplos</h1>
        
        <div class="ejemplo-js">
            <p>¡A continuación al dar clic en el botón cambiara de color de azul a verde!</p>
            <button id="miBoton">Haz clic para cambiar color</button>
        </div>
        
        <div class="ejemplo-js">
            <p id="parrafoOculto" style="display: none;">Este es un párrafo que estaba oculto. ¡Ahora lo ves!</p>
            <button id="botonAlternar">Mostrar/Ocultar Párrafo</button>
        </div>

        <div class="ejemplo-js">
            <h2 id="tituloMensaje">Hola, Mundo!</h2>
            <button id="botonCambiarTexto">Cambiar Mensaje</button>
        </div>

        <div class="ejemplo-js">
            <img id="miImagen" src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png" alt="Imagen 1" width="500" height="500">
            <button id="botonCambiarImagen">Cambiar Imagen</button>
        </div>
        <script src="javascript.js"></script>
    </div>

        <div class="demo-container">
            <p>En resumen, GitHub es una de las herramienta especiales y fundamental hoy en dia por todas las fucionalidades con las que cuenta para el desarrollo de software moderno, tanto como para la creacion de proyectos independientes o con colaboradores, y por estos motivos se ha convertido en una parte importante de la comunidad en todo el mundo.</p>
        </div>
    </main>
    <footer>
        <a href="https://github.com/" target="_blank"> GitHub</a>
    </footer>
</body>
</html>

```css

body {       
    font-family: 'Segoe UI', sans-serif;
    background-color: rgb(5, 15, 21);
    max-width: auto;
    color: black;
    margin: 0;
    padding: 20px;
    line-height: 1.6;
    text-align: center; /* Centra el texto horizontalmente */
}

h1 {
    font-size: 2.5em;
    margin-bottom: 10px;    
    color: red;
    
}

h2 {
    margin: 20px 0; /* Espaciado vertical */
    color: red;
}
p {
    margin: 20px auto;
    max-width: 1200px; /* Opcional: limita el ancho del párrafo */
}
/* Bordes de los div para que no ocupen la pantalla*/
.demo-container {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
/* bordes de la imagen*/
img {
    border-radius: 20px;
    }
/* pie de pagina*/
footer {
    background-color: aliceblue;
    text-align: center;
    padding: 15px 0;
    border-radius: 10px;
    }

        /* Un poco de CSS para que el botón se vea mejor */
        #miBoton {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007bff; /* Color inicial azul */
            color: white;
            transition: background-color 0.3s ease; /* Transición suave para el cambio de color */
        }

        #miBoton:hover {
            opacity: 0.9;
        }

        button {
    background-color: #4CAF50; /* Un verde vibrante */
    color: white; /* Texto blanco */
    padding: 10px 20px; /* Espaciado interno */
    border: none; /* Sin borde */
    border-radius: 5px; /* Esquinas redondeadas */
    cursor: pointer; /* Cambia el cursor al pasar por encima */
    font-size: 16px; /* Tamaño de fuente */
    transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
    margin-top: 10px; /* Espacio superior para separarlos del contenido */
}

button:hover {
    background-color: #45a049; /* Un verde un poco más oscuro al pasar el ratón */
}

button:active {
    background-color: #3e8e41; /* Un verde aún más oscuro al hacer clic */
}


.ejemplo-js {
    margin-top: 35px; /* Espacio superior para separar cada ejemplo */
    padding-bottom: 25px; /* Espacio en la parte inferior de cada ejemplo */
    border-bottom: 1px dashed #ddd; /* Una línea punteada para separar visualmente */
    padding-top: 5px; /* Pequeño padding superior para que la línea no esté pegada al contenido */
}

```javascript
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
    let esImagen1 = true;

    botonCambiarImagen.addEventListener('click', () => {
            miImagen.src = "https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png";
        }
        esImagen1 = !esImagen1; // Invierte el estado
    });        if (esImagen1) {
            miImagen.src = "https://plus.unsplash.com/premium_photo-1711031505781-2a45c879ceac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW0lQzMlQTFnZW5lcyUyMGltcHJlc2lvbmFudGVzfGVufDB8fDB8fHww";
        } else {

