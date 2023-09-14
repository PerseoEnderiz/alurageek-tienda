import { productServices } from "../service/product-services.js";
const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault()
    let precio_producto = document.getElementById("precio_producto").value.trim();
    precio_producto = Number(precio_producto);
    let precio_formateado = precio_producto.toLocaleString("es-MX", {style: "currency", currency: "MXN"});
    const datosProducto = {
        url_img: document.getElementById("url_img").value.trim(),
        categoria: document.getElementById("categoria").value.trim(),
        nombre_producto: document.getElementById("nombre_producto").value.trim(),
        precio_producto: precio_formateado,
        descripcion: document.getElementById("descripcion").value.trim(),
        id: uuid.v4()
      }
    console.log(datosProducto);
    
    productServices.registraProducto(datosProducto)
            .then(() => {
                //Enviame a la pagina de registro exitoso
                window.location.href = "../src/registro_exitoso.html";
            })
            .catch( (err) => alert("Error al registrar producto") );
});
