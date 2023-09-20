import { productServices } from "../service/product-services.js";

const obtenerInformacionProducto = async() => {
    const params = new URLSearchParams(window.location.search);
    const idProduct = params.get("id");

    if( idProduct == null ){
        alert("Producto inexistente")
        // window.location.href = "/screens/error.html";
    }
    //Haz una solicitud al servidor y obten las datos del producto
    const productoActual = await productServices.detalleProducto(idProduct);
    
    return productoActual;
}

const crearDetalleProducto = (productoActual) => {
    console.log(productoActual);
    const {url_img, categoria, nombre_producto, precio_producto, descripcion, id} = productoActual;
    const producto = document.createElement("div");
    producto.classList.add("detalle_producto_contenido");
    const contenido = /*html*/`
        <img src="${url_img}" alt="imagen producto" class="detalle_producto_img">
        <div class="detalle_producto_texto">
            <h2 class="detalle_producto_titulo titulo">${nombre_producto}</h2>
            <h3 class="detalle_producto_precio">${precio_producto}</h3>
            <p class="detalle_producto_descripcion descrpcion">${descripcion}</p>
        </div>
    `;
    producto.innerHTML = contenido;
    return producto;
};

const detalle = document.querySelector(".detalle_producto");

obtenerInformacionProducto().then(productoActual => {
  detalle.appendChild(crearDetalleProducto(productoActual));
});
