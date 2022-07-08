//ARRAY EJERCICIO B
// array de 10 nombres
let nombresArrayB = ["Belen", "Tomas", "Tomasito", "Maximiliano", "Bruno", "Victor", "Facundo", "Alexis", "Juan", "Ramon"];
let nombreMasLargo = '';

// mostrar el array completo
window.onload = function arrayB() {
    document.getElementById('arrayNombres').innerText = 'Array Completo: ';
    document.getElementById('arrayNombres').innerHTML += nombresArrayB;

    //Mostrar nombres ascendentemente:
    document.getElementById('nombreAscendente').innerText = 'Array ordenado ascendentemente: ';
    
    document.getElementById('nombreAscendente').innerHTML += nombresArrayB.sort((a, b) => { // ordenar ascendentemente por el nombre
        if(a > b) {
            return 1;
        }
        else if(a < b) {
            return -1;
        }
        else {
            return 0;
        }
    }
    );

    // palabra más larga del array nombresArrayB
    
    document.getElementById('cadenaMasLarga').innerText = 'Cadena mas larga del array: ';
    nombresArrayB.forEach((nombreLargo) => { //bucle for, donde se recorre todo el array nombresArrayB
        if (nombreLargo.length > nombreMasLargo.length) { // dentro del bucle for, se realizará un if, consultando si la palabra actual tiene más lentras que la siguiente
            nombreMasLargo = nombreLargo // si tiene más letras, se cambia y queda la más amplia como actual
        }
    });
    document.getElementById('cadenaMasLarga').innerHTML += ' ' + nombreMasLargo


    //Agregar un nuevo elemento a nuestro array
    window.onsubmit= function arrayBAgregar() {
    
        const agregarArrayB = document.getElementById('usuarioIngresaNombre'); //obtenemos el id UsuarioingresaNombre
        let valorNombre = agregarArrayB.value; //rescatamos el valor que ingresa el usuario (el nombre a agregar)
        agregarArrayB.value = ' '; //una vez agregado, queda nuestro input vacio
        nombresArrayB.push(valorNombre); //push ingresa un valor dentro de nuestro array

        document.getElementById('valorAgregado').innerText = 'Array Completo: ';  
        document.getElementById('valorAgregado').innerHTML += nombresArrayB
        return (false); //importante esto para que nuestra página no se actualice, realizamos un return false para que no devuelva nada, esto combinado al return en nuestra etiqueta, evitará la recarga de página.
    }

    //Eliminar un elemento de nuestro array
    document.getElementById('eliminarArrayB').onclick = function arrayBEliminar() { // cuando hagamos click en el boton de id eliminarArrayB se nos borrará el ultimo registro de nuestro array
        nombresArrayB.pop(); // la funcion pop elimina el ultimo registro
        document.getElementById('valorEliminado').innerText = 'Array Completo: ';  
        document.getElementById('valorEliminado').innerHTML += nombresArrayB
    
    }

}