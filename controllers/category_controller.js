import { productServices } from "../service/product-services.js";
import { agregarProductosACategoria } from "./product_controller.js";

export const crearCategoria = (idCat) => {
    const category = document.createElement("section");
    category.classList.add("categoria","container");
    const contenidoCategory = /*html*/`
        <div class="categoria_contenido">
            <div class="categoria_encabezado">
                <h2 class="categoria_encabezado_titulo">${idCat}</h2>
                <button class="btn_linea" onclick="window.location.href='../src/all_products.html?id=${idCat}'"> Ver todo <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="categoria_productos" id="${idCat}">
            </div>
        </div>
    `
    category.innerHTML = contenidoCategory;
    const categoriaProductos = category.querySelector(".categoria_productos");
    agregarProductosACategoria(categoriaProductos);
    return category;
};

const categoriasContenedor = document.querySelector(".categorias_contenedor");

export const listaCategorias= () => {
    productServices.listaProductos()
        .then((data) => {
            // Extrae la categoría de cada producto
            const categorias = data.map(producto => producto.categoria);
            
            // Elimina las categorías duplicadas utilizando Set
            const categoriasUnicas = [...new Set(categorias)];
            categoriasUnicas.forEach((currentValue) => {
                const nuevaCategoria = crearCategoria(currentValue);
                categoriasContenedor.appendChild(nuevaCategoria);
            });
        })
        .catch((error) => {alert("Error al obtener lista de categorias");});
}