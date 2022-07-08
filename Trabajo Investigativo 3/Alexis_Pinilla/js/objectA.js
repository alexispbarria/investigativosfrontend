//CREAR UNA PAGINA QUE MUESTRE UN LISTADO DE ANIMALES CON SUS ATRIBUTOS (NOMBRE, ESPECIE, TIPO DE ALIMENTACION) 
// PERMITA ORDENARLOS DE FORMA ASCENDENTE O DESCENDENTE POR NOMBRE Y FILTRAR POR ESPECIE


//declarando nuestra variable con un array de objetos
let animales = [
    {nombre: 'Tigre', 
    especie: 'Felino', 
    tipoAlimentacion: 'Carnivoro'
    },

    {nombre: 'Iguana', 
    especie: 'Reptil', 
    tipoAlimentacion: 'Hervivoro'
    },

    {nombre: 'Perro', 
    especie: 'Canino', 
    tipoAlimentacion: 'Carnivoro'
    }
    ];


// mostrando mediante un ciclo for in el contenido de nuestros objetos, situandolos uno en cada listado para que se vean mas ordenados
for(i in animales[0]) {
    document.getElementById('primerListado').innerHTML += '<li>' + i + ': ' + animales[0][i] + '</li>'
}
    
for(i in animales[1]) {
    document.getElementById('segundoListado').innerHTML += '<li>' + i + ': ' + animales[1][i] + '</li>'
}
    
for(i in animales[2]) {
    document.getElementById('tercerListado').innerHTML += '<li>' + i + ': ' + animales[2][i] + '</li>'
}

// llamando mediante querySelector a nuestro botón de mostrarAscendente, el cual mediante un addEventListener click, nos permitirá mostrar nuestro listado de forma ascendente 
document.querySelector('#mostrarAscendente').addEventListener('click', () => {
    document.getElementById('tituloA').innerText = 'Listado de animales ordenados ascendentemente por el nombre';
        // funcion flecha que nos permitirá ordenar de forma ASCENDENTE por el nombre de cada objeto. Esto es mediante sort().
    animales.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        } else if (a.nombre > b.nombre) {
            return 1;
        } else {
            return 0;
        }
    });

    //mostrando el resultado del orden ascendente, repitiendo el mismo ciclo for de arriba
    for(i in animales[0]) {
        document.getElementById('ascendente1').innerHTML += '<li>' + i + ': ' + animales[0][i] + '</li>'
    }
        
    for(i in animales[1]) {
        document.getElementById('ascendente2').innerHTML += '<li>' + i + ': ' + animales[1][i] + '</li>'
    }
        
    for(i in animales[2]) {
        document.getElementById('ascendente3').innerHTML += '<li>' + i + ': ' + animales[2][i] + '</li>'
    }
});


document.querySelector('#mostrarDescendente').addEventListener('click', () => {
    document.getElementById('tituloD').innerText = 'Listado de animales ordenados descendentemente por el nombre';
        // funcion flecha que nos permitirá ordenar de forma DESCENDENTE por el nombre de cada objeto. Esto es mediante sort().
    animales.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return -1;
        } else if (a.nombre < b.nombre) {
            return 1;
        } else {
            return 0;
        }
    });


    //mostrando el resultado del orden DESCENDENTE, repitiendo el mismo ciclo for de arriba
    for(i in animales[0]) {
        document.getElementById('descendente1').innerHTML += '<li>' + i + ': ' + animales[0][i] + '</li>'
    }
        
    for(i in animales[1]) {
        document.getElementById('descendente2').innerHTML += '<li>' + i + ': ' + animales[1][i] + '</li>'
    }
        
    for(i in animales[2]) {
        document.getElementById('descendente3').innerHTML += '<li>' + i + ': ' + animales[2][i] + '</li>'
    }
});

document.querySelector('#filtro').addEventListener('click',() => { //Evento que ocurrirá cada vez que demos click en el boton de id filtro
    document.getElementById('tituloFiltro').innerText = 'Listado de animales filtrados segun lo ingresado';
    let filtroTexto = document.getElementById('filtroEspecie').value; //obteniendo el valor que ingrese el usuario en el input de id filtroEspecie
    valorFiltro = filtroTexto.value; // generando nueva variable que contendrá el valor ingresado por el texto, de forma mas resumida
    valorFiltro = ' ';

    

    const indexFiltro = animales.findIndex(an => an.especie === filtroTexto); //gracias a index filtro, podremos tener la posicion en que se encuentra lo buscado mediante an.especie ===filtroTexto

    for(i in animales[indexFiltro]) {  //ciclo for para que podamos agregar los atributos del resultado dentro de nuestra lista desordenada, con sus claves y valores.
        document.getElementById('filtrado').innerHTML += '<li>' + i + ': ' + animales[indexFiltro][i] + '</li>';
    }
});