// Archivo que hace peticiones al servidor
//fetch API
//El metodo por defecto de fetch es GET
//Haz una solicitud a la url, genera una promesa
//Cuando se complete, dale un formato de arreglo a la respuesta
const listaProductos = () => 
  fetch("http://localhost:3000/productos")
    .then(respuesta => respuesta.json())
    .catch(error => 
      fetch("https://my-json-server.typicode.com/PerseoEnderiz/alurageek-tienda/productos")
        .then(respuestaAlternativa => respuestaAlternativa.json())
    );


    const registraProducto = ({url_img, categoria, nombre_producto, precio_producto, descripcion, id}) => {
      // Intenta hacer la solicitud a la URL principal
      return fetch("http://localhost:3000/productos",{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({url_img, categoria, nombre_producto, precio_producto, descripcion, id}),
      })
      .catch(error => 
        // Si falla, intenta con la URL alternativa
        fetch("https://my-json-server.typicode.com/PerseoEnderiz/alurageek-tienda/productos",{
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({url_img, categoria, nombre_producto, precio_producto, descripcion, id}),
        })
      );
    };
    


    const eliminarProducto = (id) => {
      return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE"
      })
      .catch(error => 
        fetch(`https://my-json-server.typicode.com/PerseoEnderiz/alurageek-tienda/productos/${id}`,{
          method: "DELETE"
        })
      );
    }
    
    const detalleProducto = (id) => {
      return fetch(`http://localhost:3000/productos/${id}`)
        .then(respuesta => respuesta.json())
        .catch(error => 
          fetch(`https://my-json-server.typicode.com/PerseoEnderiz/alurageek-tienda/productos/${id}`)
            .then(respuestaAlternativa => respuestaAlternativa.json())
        );
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
      .catch(error => 
        fetch(`https://my-json-server.typicode.com/PerseoEnderiz/alurageek-tienda/productos/${id}`,{
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify ({url_img, categoria, nombre_producto, precio_producto, descripcion, id}),
        })
        .then(respuestaAlternativa => respuestaAlternativa)
      );
    }
    
//Es la comunicación con el servidor y formato a la respuesta
export const productServices = {
  listaProductos, //Llave y valor
  registraProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
}