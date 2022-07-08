//ARRAY EJERCICIO A

const numIngresados = [];

const num = document.getElementById('botonAgregar');
num.onclick = (e) => { // la funcion se ejecutará cuando demos click en Agregar.
    e.preventDefault(); // previene que la página se actualice cuando damos click en Agregar, ya que, por defecto el submit realiza esta acción.
    const addNum = document.getElementById('numeros'); // creando una variable en la que se llama a los números ingresados por el usuario
    let valorNum = addNum.value; // el numero ingresado por el usuario, se guarda aqui
    valorNum = parseInt(valorNum); //convirtiendo el valor ingresado a tipo int, para poder ejecutar operaciones matemáticas.
    addNum.value = ' '; //valor inicial cuando demos click en agregar, el input quedaría en blanco
    numIngresados.push(valorNum); //agregando nuestro valores ingresados dentro de nuestro array numIngresados
    
    const showNums = document.getElementById('resultado'); // creando uan variable para llamar al div de id resutlado, lugar donde se visualizará nuestro array.
    showNums.innerText = 'Contenido del array: '; // Agregando un texto dentro de nuestro div resultado
    for(let i = 0; i < numIngresados.length; i++) { //ciclo for para recorrer nuestro array
        showNums.innerHTML += '<span>' + numIngresados[i] + '</span>' + ' ' // el resultado de nuestra busqueda array se irá guardando uno al lado de otro, gracias a los span
    }
    

    // ORDENAR VALORES DE MENOR A MAYOR DENTRO DEL ARRAY
    const numOrdenados = document.getElementById('ordenado'); // creando variable para mostrar los números ordenados de menor a mayor
    numOrdenados.innerText = 'Numeros ordenados de menor a mayor: ';  // texto ingresado como "titulo"

    numOrdenados.innerHTML += ' ' + numIngresados.sort(function(a, b) { // sort con la función puesta, nos permitirá ordenar los valores de forma ascendente, es decir, de menor a mayor
        return a - b
    });

    //SUMA TOTAL DEL ARRAY
    const sumarValoresArray = document.getElementById('suma'); // creando variable para llamar al div de id suma, donde se visualizará la suma total de los números del array
    sumarValoresArray.innerText = 'Suma total del array: '; // texto en nuestro div suma
    let sum = 0; //asignando variable en 0, para que este número sea reemplazado dentro del ciclo for, obteniendo la suma total
    for(let i = 0; i < numIngresados.length; i++) { // la variable i, comenzará en la posicion 0 del total de valores del array. el i++ indica que irá aumentando de posicion
        
        sum = sum + numIngresados[i]; // cambiando el valor de sum, sumando el número que se encuentre dentro del loop
    }
    sumarValoresArray.innerHTML += ' ' + sum // mostrar dentro de nuestro div suma el resultado de la suma.

    // PROMEDIO DEL ARRAY
    const promedioArray = document.getElementById('promedio'); // creando variable para llamar al div de id promedio, donde se visualizará el promedio total de los numeros del array
    promedioArray.innerText = 'Promedio del array: ';
    let prom = sum / numIngresados.length; // asignando una variable llamada promedio, donde se realizará la operacion de sumar el total de todos los números del array dividido por el total de valores que se encuentran dentro de este
    promedioArray.innerHTML += ' ' + prom //mostrando dentro de nuestra página.

    //VALOR MAYOR DEL ARREGLO
    const mayorArray = document.getElementById('mayor');
    mayorArray.innerText = 'Numero mayor del array: ';
    mayorArray.innerHTML += ' ' + Math.max.apply(null, numIngresados); // entregar el numero mayor del array

    //VALOR MINIMO DEL ARREGLO
    const minimoArray = document.getElementById('menor');
    minimoArray.innerText = 'Numero menor del array: ';
    minimoArray.innerHTML += ' ' + Math.min.apply(null, numIngresados); // la funcion Math.min.apply buscará nuestro número menor del arreglo

}