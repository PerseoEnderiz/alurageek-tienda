// Función que determina que funcion de validacion llamar
//Función que recibe el input que fue llenado y llama a la función para verificar patron o reglas establecidas
const validadores = {
    // nombre: (input) => validarNombre(input),
    // mensaje: (input) => validarMensaje(input),
    // email: (input) => validarEmail(input),
    // password: (input) => validarPassword(input),
    // nombre_producto: (input) => validarNombreProducto(input),
    // precio_producto: (input) => validarPrecioProducto(input),
    // descripcion: (input) => validarDescripcion(input),
    // categoria: (input) => validarCategoria(input)
};

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    //Si el input es valido o esta bien llenado, quita la clase que hace resaltar el campo, pero si no añadela
    if (input.validity.valid) {
        input.parentElement.classList.remove("campo_texto--invalido");
        //Si es valido quita el mensaje de error
        input.parentElement.querySelector(".inp-msg-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("campo_texto--invalido");
        //si no es valido busca el mensaje correspondiente
        input.parentElement.querySelector(".inp-msg-error").innerHTML = mostrarMensajeError(tipoDeInput,input);
    }
}
//Definir tipo de errores, es un arreglo de errores
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

//Definir mensajes de error por cada tipo de input
//sustituyen al title en el documento html
const mensajesDeError = {
    nombre: {
        valueMissing: "Ingrese un nombre",
        patternMismatch: "El nombre debe tener entre 3 y 50 caracteres",
    },
    mensaje: {
        valueMissing: "Ingrese un mensaje",
        customError: "El mensaje no puede tener más de 200 caracteres",
    },
    email: {
        valueMissing: "Ingrese un correo",
        // typeMismatch: "El correo no es valido",
        typeMismatch: "El correo debe contener un nombre de usuario. Luego un símbolo @ seguido de un nombre de dominio. Finalmente, debe haber un punto seguido de dos o más letras minúsculas."
    },
    password: {
        valueMissing: "Debe ingresar una contraseña",
        patternMismatch: "La contraseña debe tener entre 6 y 12 caracteres, sin espacios en blanco, y debe contener al menos una letra minúscula, una letra mayúscula y un dígito. Además, no debe contener ningún carácter especial.",
    },
    nombre_producto: {
        valueMissing: "Ingrese un nombre de producto",
        patternMismatch: "El nombre del producto debe tener entre 3 y 20 caracteres",
    },
    precio_producto: {
        valueMissing: "Ingrese un precio de producto",
        patternMismatch: "El precio del producto debe ser un número",
    },
    descripcion: {
        valueMissing: "Ingrese una descripción de producto",
        patternMismatch: "La descripción del producto debe tener entre 10 y 300 caracteres",
    },
    categoria: {
        valueMissing: "Ingrese una categoría de producto",
        patternMismatch: "La categoría del producto debe tener entre 3 y 20 caracteres",
    }
};


function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = "";

    //funcion anonima que comprueba que error fue
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            //Si hay error, dime cual fue
            console.log(error); //que error
            console.log(input); //donde
            console.log(mensajesDeError[tipoDeInput][error]); //mensaje a mostrar
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })


    return mensaje;
}

export default valida;