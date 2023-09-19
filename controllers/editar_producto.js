import { productServices } from "../service/product-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacionProducto = async() => {
    //De la pagina actual
    const url = new URL( window.location );
    //obten el id del boton pulsado
    const id = url.searchParams.get("id");

    if( id == null ){
        alert("Producto inexistente")
        // window.location.href = "/screens/error.html";
    }
    
    //En la nueva pagina obten los campos
    const datosProducto = {
        url_img: document.getElementById("url_img"),
        categoria: document.getElementById("categoria"),
        nombre_producto: document.getElementById("nombre_producto"),
        precio_producto: document.getElementById("precio_producto"),
        descripcion: document.getElementById("descripcion"),
    }

    //Haz una solicitud al servidor y obten las datos a editar
    //Coloca los datos en los campos
    const productoActual = await productServices.detalleProducto(id);
    datosProducto.url_img.value = productoActual.url_img;
    datosProducto.categoria.value = productoActual.categoria;
    datosProducto.nombre_producto.value = productoActual.nombre_producto;
    datosProducto.precio_producto.value = productoActual.precio_producto;
    datosProducto.descripcion.value = productoActual.descripcion;
}

obtenerInformacionProducto();

formulario.addEventListener( "submit" , evento => {
    evento.preventDefault();
    const url = new URL(window.location);
    const idProduct = url.searchParams.get("id");
    let precio_producto = document.getElementById("precio_producto").value.trim();
    precio_producto = Number(precio_producto);
    let precio_formateado = precio_producto.toLocaleString("es-MX", {style: "currency", currency: "MXN"});
    const datosProducto = {
        url_img: document.getElementById("url_img").value.trim(),
        categoria: document.getElementById("categoria").value.trim(),
        nombre_producto: document.getElementById("nombre_producto").value.trim(),
        precio_producto: precio_formateado,
        descripcion: document.getElementById("descripcion").value.trim(),
        id : idProduct,
    }

    productServices.actualizarProducto(datosProducto)
            .then(() => {
                //Enviame a la pagina de registro exitoso
                window.location.href = "../src/registro_exitoso.html";
            })
            .catch( (err) => alert("Error al editar producto") );
});