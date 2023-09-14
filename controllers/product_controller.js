//Añade la funcion de pedir al servidor desde este archivo
import { productServices } from "../service/product-services.js";
//client_controller es la Conexión entre el html y java por lo cual este archivo es el agregado en el index

//Crea el codigo html que se necesita para un registro
//Genera template
export const crearProducto = (url_img, categoria, nombre_producto, precio_producto, descripcion, id) => {
    const producto = document.createElement("div");
    producto.classList.add("tarjetaProducto");
    const contenido = /*html*/`
        <div class="producto_encabezado">
            <button class="btn_trash" id="${id}"><i class="fa-solid fa-trash"></i></button>
            <img src="${url_img}" alt="img_prod" class="producto_img">
            <button type="button" class="btn_edit" id="${id}"  onclick="window.location.href='../src/login.html?id=${id}'"><i class="fa-solid fa-pen"></i></button>
        </div>                
        <div class="producto_texto">
            <h3 class="producto_titulo descripcion">${nombre_producto}</h3>
            <h3 class="producto_precio">${precio_producto}</h3>
            <button type="button" class="producto_btn btn_linea" onclick="window.location.href='../src/detalle_producto.html?id=${id}'">Ver producto</button>
        </div>
    `;
    producto.innerHTML = contenido;
    const btnTrash = producto.querySelector(".btn_trash");
    btnTrash.addEventListener("click", () => {
        const id = btnTrash.id;
        productServices.eliminarProducto(id).then(alert("Eliminacion exitosa") ).catch( err => alert("Error al eliminar producto"));
    })
    const btnEdit = producto.querySelector(".btn_edit");
    btnEdit.addEventListener("click", () => {
        const id = btnEdit.id;
        
    })
    return producto;
  };

export const agregarProductosACategoria = (categoriaProductos) => {
productServices.listaProductos()
    .then((data) => {
        // Para cada producto, verifica si su categoría coincide con el id del elemento actual
        data.forEach(({url_img, categoria, nombre_producto, precio_producto, descripcion, id}) => {
            if (categoria === categoriaProductos.id) {
                // Si coincide, crea el producto y agrégalo al elemento
                const nuevoProducto = crearProducto(url_img, categoria, nombre_producto, precio_producto, descripcion, id);
                categoriaProductos.appendChild(nuevoProducto);
            }
        });
    })
    .catch((error) => {alert("Error al obtener lista de productos");});
};

/* // Selecciona todos los elementos con la clase "categoria_productos"
const categoriasProductos = document.querySelectorAll(".categoria_productos");
console.log(categoriasProductos);

// Itera sobre cada elemento
categoriasProductos.forEach(categoriaProductos => {
  // Solicita la lista de productos
  productServices.listaProductos()
    .then((data) => {
      // Para cada producto, verifica si su categoría coincide con el id del elemento actual
      data.forEach(({url_img, categoria, nombre_producto, precio_producto, descripcion, id}) => {
        if (categoria === categoriaProductos.id) {
          // Si coincide, crea el producto y agrégalo al elemento
          const nuevoProducto = crearProducto(url_img, categoria, nombre_producto, precio_producto, descripcion, id);
          categoriaProductos.appendChild(nuevoProducto);
        }
      });
    })
    .catch((error) => {alert("Error al obtener lista de productos");});
}); */