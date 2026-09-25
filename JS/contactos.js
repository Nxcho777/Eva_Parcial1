const formulario = document.getElementById("form-contacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("fallo-nombre");
const errorCorreo = document.getElementById("fallo-correo");
const errorMensaje = document.getElementById("fallo-mensaje");
const mensajeExito = document.getElementById("mensaje-exito")


const dominiosAceptados = [
    "@duoc.cl",
    "@profesor.duoc.cl",
    "@gmail.com"
];

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreValido = nombre.value.trim() !== "";
    const mensajeValido = mensaje.value.trim() !== "";
    const correoIngresado = correo.value.trim().toLowerCase();

    const correoValido =

        correoIngresado.endsWith("@duoc.cl") ||
        correoIngresado.endsWith("@profesor.duoc.cl") ||
        correoIngresado.endsWith("@gmail.com");

    if (nombreValido && correoValido && mensajeValido) {
        mensajeExito.textContent = "Su mensaje ha sido enviado correctamente, porfavor espere respuesta";
        
        formulario.reset();
        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorMensaje.textContent = "";
    }
});

nombre.addEventListener("input", function() {
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio";
    } else {
        errorNombre.textContent = "";
    }
});

correo.addEventListener("input", function() {
    const correoIngresado = correo.value.trim().toLowerCase();

    if (correoIngresado === "") {
        errorCorreo.textContent = "El correo es obligatorio";
    } else if (!dominiosAceptados.some(function(dominio) {
        return correoIngresado.endsWith(dominio);
    })) {
        errorCorreo.textContent = "El dominio de su correo no es permitido";
    } else {
        errorCorreo.textContent = "";
    }
});

mensaje.addEventListener("input", function() {
    if (mensaje.value.trim() === "") {
        errorMensaje.textContent = "El mensaje es obligatorio";
    } else {
        errorMensaje.textContent = "";
    }
});