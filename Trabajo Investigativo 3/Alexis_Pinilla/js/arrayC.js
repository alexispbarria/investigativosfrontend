// ARRAY EJERCICIO C
// CREAR UNA PAGINA QUE NOS PERMITA INGRESAR 5 PALABRAS Y LUEGO MOSTRAR LO SIGUIENTE:
//  UNA PALABRA CREADA CON LA PRIMERA LETRA DE CADA PALABRA INGRESADA
// UNA PALABRA CREADA CON LA ULTIMA LETRA DE CADA PALABRA INGRESADA
// MOSTRAR CUAL FUE LA PALABRA MAS CORTA INGRESADA
// CUANTAS PALABRAS COMIENZAN CON LA LETRA A

const arrayPalabrasEjC = [];
let palabraMasCorta = '';

// Ingresar 5 palabras 
const formularioPalabras = document.getElementById('palabrasForm'); 
formularioPalabras.onsubmit = (e) => { // cada vez que nuestro formulario haga submit, se ejecutará la funcion
    e.preventDefault(); // evita la actualizacion post submit
    const usuarioIngresaPalabra = document.getElementById('ingresarPalabras'); //creando una variable para resumir el codigo para llamar a nuestro input de texto
    let valorPalabra = usuarioIngresaPalabra.value; //variable que almacena el valor ingresado por nuestro usuario en el input de texto
    usuarioIngresaPalabra.value = ''; // cada vez que se realice submit, el value de nuestro input se reiniciará y quedará en blanco
    arrayPalabrasEjC.push(valorPalabra); //agregando la palabra ingresada por nuestro usuario al array

    const divPalabraAgregada = document.getElementById('palabraAgregada'); // variable para contener el llamado a nuestro div palabraAgregada

    divPalabraAgregada.innerHTML = '';
    divPalabraAgregada.innerText = 'Palabras Ingresadas: '
    for(let i = 0; i < arrayPalabrasEjC.length; i++) { //loop para recorrer e insertar en nuestro documento html los valores ingresados 
        divPalabraAgregada.innerHTML += arrayPalabrasEjC[i] + ' '
    }

    //FORMANDO UNA PALABRA CON LA PRIMERA LETRA DE CADA PALABRA
    document.getElementById('primeraLetraPalabra').innerText = 'Formando una palabra con la primera letra de cada palabra: '
    total = arrayPalabrasEjC.length;
    resultado = "";
    for(let i = 0; i < total; resultado += arrayPalabrasEjC[i][0], i++);
    document.getElementById('primeraLetraPalabra').innerHTML += resultado

    //FORMANDO UNA PALABRA CON LA ULTIMA LETRA DE CADA PALABRA
    document.getElementById('ultimaLetraPalabra').innerText = 'Formando una palabra con la ultima letra de cada palabra: '
    resultadoUltima = "";
    for(let i = 0; i < total; resultadoUltima += arrayPalabrasEjC[i].substr(-1), i++) ;
    document.getElementById('ultimaLetraPalabra').innerHTML += resultadoUltima

    //PALABRA MAS CORTA INGRESADA
    document.getElementById('cadenaMasCorta').innerText = 'Cadena mas corta ingresada: '
    function palabraCortaArrayC(arrayPalabras) { //funcion que necesita que se ingrese un array como argumento para encontrar la palabra más corta de este
        return arrayPalabras.sort((a, b) => a.length - b.length)[0]; // retorna una resta entre las palabras ingresadas, comparando quien tiene la menor letra
    }
    document.getElementById('cadenaMasCorta').innerHTML += palabraCortaArrayC(arrayPalabrasEjC) // se ingresa la funcion dentro de nuestro id cadenaMasCorta en el archivo html.

    //CUANTAS PALABRAS COMIENZAN CON A
    document.getElementById('palabrasConA').innerText = 'Contador de palabras que empiezan con A mayuscula: '
    let palabrasComienzanConA = arrayPalabrasEjC.filter(palabra => /^A/.test(palabra)); //se utiliza una expresión regular para verificar qué palabras comienzan con A, esto es mediante /^A/
    document.getElementById('palabrasConA').innerHTML += palabrasComienzanConA.length //length nos entrega la cantidad de resultados. El cual se detalla dentro de nuestro documento html
}










