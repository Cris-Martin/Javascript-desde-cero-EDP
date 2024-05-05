# Ejercicios

## **Tema: Mi Portfolio**

1. Crea una estructura básica de página HTML que incluya un encabezado, un cuerpo y un pie de página.
    
    
    - **`<header>`**: La etiqueta **`<header>`** se utiliza para representar la cabecera o encabezado de una sección o de toda la página.
    - **`<main>`**: La etiqueta **`<main>`** se utiliza para representar el contenido principal de la página.
    - **`<footer>`**: La etiqueta **`<footer>`** se utiliza para representar el pie de página de una sección o de toda la página.
    
2. En el encabezado, incluye un título que diga "Mi Portfolio" y un subtítulo con tu nombre o tu profesión.
    
    
3. Dentro del cuerpo de la página, crea secciones que muestren tu información personal y profesional. Puedes incluir las siguientes secciones:
    
    
    - **Sobre mí:** Describe quién eres, tus intereses, habilidades y pasiones. Usa párrafos y, si lo deseas, enfatiza algunos puntos con la etiqueta **`<strong>`** o **`<em>`**.
    - **Experiencia laboral:** Crea una lista de tus trabajos anteriores o proyectos destacados. Utiliza la etiqueta **`<ul>`** y **`<li>`** para enumerar cada uno.
    - **Educación:** Enumera tu historial educativo y los títulos obtenidos.
    - **Habilidades:** Crea una tabla para mostrar tus habilidades, por ejemplo, en diferentes áreas de programación, diseño o herramientas que manejas.
    - **Proyectos:** Agrega una sección para mostrar tus proyectos más relevantes. Incluye una breve descripción y, si es posible, imágenes de los proyectos. Puedes usar la etiqueta **`<a>`** para enlazar a los proyectos en línea.
        
        
4. En el pie de página, agrega tus datos de contacto, como tu dirección de correo electrónico y enlaces a tus redes sociales o perfiles profesionales (por ejemplo, LinkedIn, GitHub, Behance, etc.).

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portfolio</title>
    <style>
        /* Estilos CSS */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        main {
            padding: 20px;
        }
        footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

<header>
    <h1>Mi Portfolio</h1>
    <h2>Desarrollador Web</h2>
</header>

<main>
    <section id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>Soy estudiante de CS y actualmente me encuentro aprendiendo Javascript, con intenciones de seguir aprendiendo lo que mas pueda y superarme.</p>
    </section>
    // completar section entre semana, ir pensando en estos dias con que llenar 
    //experiencia laboral
    //educacion
    //habilidades
    //proyectos
    
    
</main>

<footer>
    <p>Contacto: crismartin236@gmail.com</p>
    <p>Redes sociales: <a href="#">LinkedIn: pensando como compartir el link </a>, <a href="#">GitHub</a></p>
</footer>

</body>
</html>
