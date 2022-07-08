//ARRAY EJERCICIO E
//CREAR UNA PAGINA QUE NOS PERMITA INGRESAR 10 VALORES Y MOSTRAR LO SIGUIENTE:
//CUALES Y CUANTOS NUMEROS PARES E IMPARES SE INGRESARON
//CUALES Y CUANTOS NUMEROS POSITIVOS Y NEGATIVOS SE INGRESARON
//CUANTOS NUMEROS ENTRE 10 Y 100 SE INGRESARON

let numIngresados = [];
let numPares = [];
let numImpares = [];
let numPositivos = [];
let numNegativos = [];
let numEntre = [];


document.querySelector('#agregar').addEventListener('click', () => { // agregando una funcion donde cada vez que demos click en nuestro boton de id "agregar", se ejecutará el contenido
    let addNum = parseInt(document.getElementById('numValue').value); // el valor que ingresemos, será convertido al tipo texto
    addNum = parseInt(addNum);
    valorNum = addNum.value; // creamos una variable que contendrá el valor de nuestro numero agregado (para resumir el code)
    addNum.value = ' '; // cuando pulsemos click, el valor de value quedará en ' '
    numIngresados.push(addNum); // agregamos el valor que ingrese el usuario dentro de nuestro array numIngresados.

    document.getElementById('mostrarNumeros').innerText = 'Contenido del array: '; //texto antes de comenzar a mostrar nuestro array
    for(let i = 0; i < numIngresados.length; i++) { //ciclo for el cual nos permitirá agregar los valores ingresados por el usuario dentro de nuestro array. Estos se irán agregando unos al lado del otro.
        document.getElementById('mostrarNumeros').innerHTML += '<span>' + numIngresados[i] + '</span>' + ' | ' // ingresando en nuestro html el valor del recorrido i dentro del array
    }
    
    // obtener numeros pares mediante un if con el valor ingresado por el usuario
    if(addNum % 2 == 0){
        numPares.push(addNum); //agregando numeros pares dentro de nuestro array pares
        document.getElementById('numerosPares').innerText = 'Numeros Pares: ';
        
        // agregando numeros pares
        for(let i = 0; i < numPares.length; i++) { //ciclo for el cual nos permitirá agregar los valores pares ingresados por el usuario dentro de nuestro array pares. Estos se irán agregando unos al lado del otro.
            document.getElementById('numerosPares').innerHTML +=  numPares[i] + ' | ' // ingresando en nuestro html el valor del recorrido i dentro del array
            document.getElementById('cantidadPares').innerHTML = 'Cantidad de numeros pares: ' + numPares.length // length contará la cantidad de nuestro array pares
        }
    }
    // obtener numeros impares mediante un if con el valor ingresado por el usuario
    if(addNum % 2 != 0){
        numImpares.push(addNum); // agregando numeros impares dentro de nuestro array impares
        document.getElementById('numerosImpares').innerText = 'Numeros Impares: '; 
        
        // agregando numeros pares
        for(let i = 0; i < numImpares.length; i++) { //ciclo for el cual nos permitirá agregar los valores impares ingresados por el usuario dentro de nuestro array impares. Estos se irán agregando unos al lado del otro.
            document.getElementById('numerosImpares').innerHTML +=  numImpares[i] + ' | ' // ingresando en nuestro html el valor del recorrido i dentro del array
            document.getElementById('cantidadImpares').innerHTML = 'Cantidad de numeros impares: ' + numImpares.length // length contará la cantidad de nuestro array impares
        }
    }

    if(addNum >= 0) { // si el numero ingresado por el usuario es mayor o igual a cero, se agregará a nuestro array numPositivos mediante push
        numPositivos.push(addNum);
        document.getElementById('numerosPositivos').innerText = 'Numeros Positivos: ' // texto tipo "titulo"
        for(let i = 0; i < numPositivos.length; i++) {  //ciclo for que nos permitira captar y agregar numeros positivos a nuestro array numPositivos
            document.getElementById('numerosPositivos').innerHTML += numPositivos[i] + ' | ' // ingresando en nuestro html el valor del recorrido i dentro del array
            document.getElementById('cantidadPositivos').innerHTML = 'Cantidad de numeros positivos: ' + numPositivos.length // contando la cantidad de numeros
        }
    }


    if(addNum < 0) { // si el numero ingresado por el usuario es menor a cero, se agregará a nuestro array numNegativos mediante push
        numNegativos.push(addNum);
        document.getElementById('numerosNegativos').innerText = 'Numeros Negativos: ' // texto tipo "titulo"
        for(let i = 0; i < numNegativos.length; i++) {  //ciclo for que nos permitira captar y agregar numeros negativos a nuestro array numNegativos
            document.getElementById('numerosNegativos').innerHTML += numNegativos[i] + ' | ' // ingresando en nuestro html el valor del recorrido i dentro del array
            document.getElementById('cantidadNegativos').innerHTML = 'Cantidad de numeros negativos: ' + numNegativos.length // contando la cantidad de numeros
        }
    }

    
    // obtener numeros entre 10 y 100
    if(addNum >= 10 && addNum <= 100) { // ciclo for que nos permitira captar y agregar numeros entre 0  y 100 en nuestro array numEntre, mediante push.
        numEntre.push(addNum);
        for(let i = 0; i < numEntre.length; i++) {
            document.getElementById('numerosEntre').innerHTML = 'Cantidad de numeros entre 10 y 100: ' + numEntre.length // contando la cantidad de numeros
        }
    }

    
})