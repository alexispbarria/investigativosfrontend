// definiendo variables

//constante (no cambiará), con querySelector seleccionará la id de html "slider"
const slider = document.querySelector("#slider");

// modificando cada una de las slider_section, de nuestro archivo html. Para eso es el querySelectorAll ya que hay más de un slider_section
let sliderSection = document.querySelectorAll(".slider_section");

//Modificando el ultimo slider, guardando una variable dentro de una variable. Para seleccionar el ultimo slider (ya que este cambiará), se utiliza lenght -1 para indicar que siempre sea el ultimo.
let sliderSectionLast = sliderSection[sliderSection.length -1];

// Creando constantes (no cambiarán) para nuestros botones de derecha e izquierda. Estos son llamados mediante su id asignada en el documento html.
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

// Obtener el ultimo elemento y lo voy a colocar en el slider. ( el elemento se puede poner en el lugar que solicitemos nosotros. )
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// creando funciones

//mover la imagen hacia la derecha
function Next() {
    //con esta variable, de nuestro slider_section solo tomaremos al primero.
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    
    // con esto, seleccionamos la imagen siguiente, ya que es un efecto de marginleft, por lo que correria nuestra imagen hacia la izquierda, haciendo que se muestr la siguiente
    slider.style.marginLeft = "-200%";
    // efecto de transicion para que tarde 0.5s en mostrasr la imagen siguiente completa
    slider.style.transition = "all 0.5s";

    // Aqui configuramos una vez que el evento de arriba finalice, es decir, cuando la imagen sea cambiada
    setTimeout(function(){
        // quitamos el efecto de transicion, ya que esto lo necesitamos solo cuando queremos que nuestra imagen dentro del recuadro de slider se muestre. Recordemos que aqui estamos haciendo que la imagen que sea desplazada, pasará al ultimo lugar, para generar un efecto de infinito.
        slider.style.transition = "none";
        // enviamos la imagen del slider al before end, es decir, al ultimo lugar (antes que finalice el div)
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        // con esto permitimos que nuestra imagen vuelva a su lugar original
        slider.style.marginLeft = "-100%";
    }, 500); //este 500 es el tiempo, equivalente al 0.5s del transition
}




//funcion para mover la imagen hacia la izquierda

function Prev() {
    // modificando cada una de las slider_section, de nuestro archivo html. Para eso es el querySelectorAll ya que hay más de un slider_section
    let sliderSection = document.querySelectorAll(".slider_section");
    //Modificando el ultimo slider, guardando una variable dentro de una variable. Para seleccionar el ultimo slider (ya que este cambiará), se utiliza lenght -1 para indicar que siempre sea el ultimo.
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    // con esto, seleccionamos la imagen siguiente, ya que es un efecto de marginleft, por lo que correria nuestra imagen hacia la izquierda, haciendo que se muestr la anterior
    slider.style.marginLeft = "0";
    // efecto de transicion para que tarde 0.5s en mostrasr la imagen siguiente completa
    slider.style.transition = "all 0.5s";

    // Aqui configuramos una vez que el evento de arriba finalice, es decir, cuando la imagen sea cambiada
    setTimeout(function(){
        // quitamos el efecto de transicion, ya que esto lo necesitamos solo cuando queremos que nuestra imagen dentro del recuadro de slider se muestre. Recordemos que aqui estamos haciendo que la imagen que sea desplazada, pasará al ultimo lugar, para generar un efecto de infinito.
        slider.style.transition = "none";
        // enviamos la imagen del slider al afterbegin, es decir, al primer lugar (luegod e que empiece nuestro div)
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        // con esto permitimos que nuestra imagen vuelva a su lugar original
        slider.style.marginLeft = "-100%";
    }, 500); //este 500 es el tiempo, equivalente al 0.5s del transition
}

//Con esto ejecutamos nuestra funcion NExt, al momento que detecte el evento "click"
btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})

// con setInterval permitimos que se nos ejecute automaticamente una función, indicandole un intervalo de tiempo
// EN este punto, hacemos que se nos ejecute la funcion next (muestra nuestra imagen siguiente) en un intervalo de 5 segundos.
setInterval(function(){
    Next();
}, 5000);

// FUNCIÓN PARA VALIDAR RUT

function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
}


// Funcion para cambiar los campos de texto a mayuscula por si solo

function upperCase() {
    // aqui asignamos al var x nuestro id del input "nombre"
    var x = document.getElementById("nombre").value
    // aqui a dicho id nombre (input dentro de nuestro html), le asignamos la funcion toUpperCase que nos convierte el texto en mayuscula
    document.getElementById("nombre").value=x.toUpperCase()
}

function completarCampos() {

    // validar si se ingreso nombre completo
    if (document.formulario.nombre.value.length==0) {
        alert ("¡Debe llenar todos los campos!") //Ventana emergente
        document.formulario.nombre.focus() // Esto nos llevará al campo nombre, para que se rellene
        return 0;
    }

    // Validar si el correo de ingreso
    if (document.formulario.correo.value.length==0) { // Si nuestro campo de correo no cuenta con nada escrito
        alert ("¡Debe llenar todos los campos!") //ventana emergente
        document.formulario.correo.focus() //Esto nos llevará al campo correo, para que se rellene
        return 0;
    }
    // validando si la edad se completo
    if (document.formulario.edad.value.length==''){ //Si nuestro campo de edad no cuenta con valores dentro de su input
        alert ("¡Debe llenar todos los campos!") // Ventana emergente
        return 0;
    }
    // validar si la fecha fue rellenada
    if (document.formulario.date.value.length=='') { // Si nuestro campo de edad no cuenta con nada dentro de su input
        alert ("¡Debe llenar todos los campos!") // Ventana emergente
        return 0;
    } 

}

// configurando las reseñas
let rev = 0;
carousel(rev);

// funcion para volver la imagen atrás en la botonera 
function previousReview() {
    rev = rev - 1;
    carousel(rev);
}

// Funcion para adelantar la imagen, boton next.
function nextReview() {
    rev = rev + 1;
    carousel(rev);
}

// funcion que realiza el cambio de imagen, turnando según corresponda
function carousel(review) {
    let reviews = document.getElementsByClassName("review__items"); // haciendo llamado a la clase revirew__items
  
    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) { //ciclo for para asignar numero a las imágenes, dependiendo de donde se encuentre, la siguiente orá cambiando segun nuestro orden de etiquetas.
        reviews[i].style.display = "none";
    }
reviews[review].style.display = "block";
}

// Comenzando con el script que permite cerrar el popup, además hace que aparezca al recargar la página
const popup = document.querySelector('.popup'); //definiendo la constante que hace referencia a .popup
const close = document.querySelector('.close'); //definiendo la constante que hace referencia a .close

window.onload = function(){ 
    setTimeout(function(){ // cuando nuestra pagina se recargue, se generará la funcion que hace referencia a popup, la cual quita el display:none y lo deja como display:block, para que se muestre en pantalla
        popup.style.display = "block"
    })
}

close.addEventListener('click', () => {
    popup.style.display = "none" // al momento de realizar el evento "click" dentro de nuestro boton "close", el popup pasará a display:none
})
