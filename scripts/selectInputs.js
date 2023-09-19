import valida from "./validaciones.js";

//Selecciona todos los inputs
const inputs = document.querySelectorAll("input");
// console.log(inputs);

//Cuando se deseleccion alguno dile a la funcion valida cual fue deseleccionado
//Valida llamara la funcion correspondiente para verificar la informacion este bien
inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
        console.log(input.target);
    })
})

