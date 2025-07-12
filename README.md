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
</html>```
