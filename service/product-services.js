// Archivo que hace peticiones al servidor
//fetch API
//El metodo por defecto de fetch es GET
//Haz una solicitud a la url, genera una promesa
//Cuando se complete, dale un formato de arreglo a la respuesta
const listaProductos = () => fetch("http://localhost:3000/productos").then( respuesta => respuesta.json());

const registraProducto = ({url_img, categoria, nombre_producto, precio_producto, descripcion, id}) => {
  //Has un solicitud de creacion a esta direccion, con el metodo post, encabezado y cuerpo con las caracteristicas indicadas
  return fetch("http://localhost:3000/productos",{
    method: "POST", //Enviaré datos al servidor
    headers: {
      "Content-type": "application/json" //Te enviaré objetos en formato json
    },
    body: JSON.stringify({url_img, categoria, nombre_producto, precio_producto, descripcion, id}),
    //Da formato json a 3 objetos javascript, el nombre y email son recibidos, pero el id crealo con uuid
  });
};


const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`,{
    method: "DELETE"
  })
}

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then( respuesta => respuesta.json() );
}

const actualizarProducto = ({url_img, categoria, nombre_producto, precio_producto, descripcion, id}) => {
  return fetch(`http://localhost:3000/productos/${id}`,{
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify ({url_img, categoria, nombre_producto, precio_producto, descripcion, id}),
  })
  .then(respuesta => respuesta)
  .catch(err => console.log("err"))
}

//Es la comunicación con el servidor y formato a la respuesta
export const productServices = {
  listaProductos, //Llave y valor
  registraProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
}