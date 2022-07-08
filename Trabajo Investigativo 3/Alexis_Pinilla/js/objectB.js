//CREAR UNA PAGINA QUE NOS MUESTRE LOS SIGUIENTES DATOS DE UNA PERSONA Y ACTUALIZARLOS:
//FOTO, NOMBRE COMPLETO, RUT, FECHA DE NACIMIENTO, CORREO, PROFESION

document.querySelector('#agregarDatos').addEventListener('click', () => {
    let linkFoto = document.getElementById('foto').value;

    let valorNombre = document.getElementById('nombreCompleto').value; // tomando el valor en el input de nombre
    

    let valorRut = document.getElementById('rut').value; //tomando el valor en el input de rut
    

    let valorFecha = document.getElementById('fechaNace').value; //tomando el valor en el input de fecha
    

    let valorCorreo = document.getElementById('correoElectronico').value; //tomando el valor en el input de correo
     

    let valorProfesion = document.getElementById('profesion').value; //tomando el valor en el input de profesion
    


    // BLOQUE DE INGRESO DE DATOS DENTRO DEL UL datosIngresados. Cada elemento ingresado por el usuario se convierte en un li
    document.getElementById('linkFoto').src = linkFoto; // esta funcion, tiene .src para que lo ingresado por el usuario (linkFoto se encarga de eso), se incluye dentro de las comillas
    document.getElementById('ulNombre').innerHTML = '<li>' + 'Nombre completo: ' + valorNombre + '</li>'
    document.getElementById('ulRut').innerHTML = '<li>' + 'Rut: ' + valorRut + '</li>'
    document.getElementById('ulFechaNace').innerHTML = '<li>' + 'Fecha de nacimiento: ' + valorFecha + '</li>'
    document.getElementById('ulCorreo').innerHTML = '<li>' + 'Correo electrónico: ' + valorCorreo + '</li>'
    document.getElementById('ulProfesion').innerHTML = '<li>' + 'Profesion: ' + valorProfesion + '</li>'
});