function arrayDuplicados(array){
    // Por parametros recibiras un array de numeros, tendras que el array duplicado! Usa: Metodo .map()
    // Tu codigo:
    const arrayDuplicado = array.map(numero => numero * 2);
    
    return arrayDuplicado;
}

const nombresPersonas = (array) => {
    // Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
    // Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
    // Tu codigo:
    const nombres = array.map(persona => persona.name);
    
    return nombres;
}

function masImpuestos(array){
    // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% y agregarlo como prodiedad
    // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000, Impuestos: 100}
    // Usar metodo .map()
    // Tu codigo:
    const calcularImpuestos = (productos) => {
        // Utiliza el método map para iterar sobre cada objeto del array y calcular el impuesto del 10%
        const productosConImpuestos = productos.map(producto => {
            const impuesto = producto.precio * 0.1; // Calcula el impuesto del 10%
            return {
                ...producto, // Copia todas las propiedades del producto original
                Impuestos: impuesto // Agrega la propiedad de impuestos al objeto
            };
        });
        
        return productosConImpuestos;
}

function NombresLargos(array){
    // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
    // Tu codigo:
    const nombresConLongitudMayorOIgualA5 = (nombres) => {
        // La ideaa es usar el método filter para filtrar los nombres
        const nombresFiltrados = nombres.filter(nombre => nombre.length >= 5);
        
        return nombresFiltrados;
}

function filtaradoPorCategoria(array, categoria){
    // Recibiras por porametros un array de objetos con peliculas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria:  }.
    // deberás usar metodo filter, para devolver un array con los nombres de las peliculas que sean de la categoria pedida.
    // Tu codigo:
  const peliculasFiltradas = array.filter(pelicula => pelicula.Categoria === categoria);
    
  // crer un nuevo array con las peliculas filtradas
  const nombresPeliculas = peliculasFiltradas.map(pelicula => pelicula.titulo);
  
  return nombresPeliculas;
}

function examenIngreso(array){
    // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
    // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examon (nota >= 70) y inscripcion completa (inscripcion = true)
    // Tu codigo:
    const alumnosAprobados = array.filter(alumno => alumno.nota >= 70 && alumno.inscripcion === true);
    return alumnosAprobados;
}

function nombreContiene(nombres, search) {
    // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
    // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
    // deberia devolver => ['Agustina','Martina','Cristina']
    // Tu código aquí 👈
    const nombresFiltrados = nombres.filter(nombre => nombre.includes(search));
    return nombresFiltrados;
}
}


module.exports = {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene

}
}