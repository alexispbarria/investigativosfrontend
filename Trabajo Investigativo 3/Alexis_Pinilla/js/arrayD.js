// ARRAY EJERCICIO D 
// CREAR UNA PÁGINA QUE NOS PERMITA INGRESAR 2 VALORES Y ESCOGER QUÉ OPERACION QUEREMOS REALIZAR CON DICHOS VALORES, LA APLICACION DEBE SER CAPAZ DE REALIZAR LO SIGUIENTE:
// SUMAR
// RESTAR
// MULTIPLICAR
// DIVIDIR (EN CASO DE SER DIVISION POR 0, MOSTRAR MENSAJE DE ERROR QUE LO INDIQUE)
//MOSTRAR LA POTENCIA DEL PRIMER VALOR POR EL SEGUNDO
// VALIDAR CUAL DE LOS 2 VALORES ES EL MAYOR O SI SON IGUALES

// cuando demos click en nuestra etiqueta de id "calcular" (nuestro botón), se ejecutará la funcion establecida a continuación
document.getElementById('resultadoCalculoText').innerText = 'El resultado del calculo es: ';
document.querySelector('#calcular').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#numero1').value); //obtener el valor ingresado por el usuario en el id numero1 | además, parseInt trasnforma esta opcion a numerica, ya que desde el input es "text"
    const n2 = parseInt(document.querySelector('#numero2').value); //obtener el valor ingresado por el usuario en el id numero2 | además, parseInt trasnforma esta opcion a numerica, ya que desde el input es "text"
    const op = document.querySelector('#opcion').value; //obtener la seleccion de nuestro usuario en el id opcion

    // la variable resultado guardará los resultados de las operaciones ingresadas, dependiendo de la opcion seleccionada
    let resultado;
    if(op == '+'){
        resultado = n1 + n2;
    }
    else if(op == '-'){
        resultado = n1 - n2;
    }
    else if(op == '*'){
        resultado = n1 * n2;
    }
    else if(op == '/'){
        if(n1 == 0 || n2 == 0){ // este if se aplica en caso que alguno de los valores ingresados sea 0, por eso el operador or (||)
            alert('ERROR no se puede dividir por 0');    
        }
        resultado = n1 / n2;
    }
    else if(op == 'compararValores'){
        if(n1 > n2){ //si el primer valor ingresado es mayor que el segundo, resultado adopta el mensaje expuesto abajo
            resultado = 'El numero mayor es: ' + n1;
        }
        else if(n2 > n1){ //si el segundo valor ingresado es mayor que el primero, resultado adopta el mensaje expuesto abajo
            resultado = 'El numero mayor es: ' + n2;
        }
        else if(n1 == n2){ // si ambos valores son iguales, se muestra lo expuesto en el cuerpo del if
            resultado = "Los numeros son iguales";
        }
    }
    else if(op == 'potencia'){
        resultado = potencia(n1, n2); // si la opcion ingresada es la de obtener potencia, resultado toma la funcion potencia, que tomará como argumento los 2 valores ingresados por el usuario
    }
    document.getElementById('resultadoCalculo').innerHTML = resultado
});

// funcion para obtener potencia de 2 numeros ingresados, siendo el primero la base y el segundo el exponente
function potencia(base, exponente) {
    let r = 1;
    // el ciclo for recorrera nuestro exponente, hasta alcanzar un numero menos, para guardar ese valor en el resultado.
    for(let i = 0; i < exponente; i++) {
        r *= base;
    }
    return r
};
