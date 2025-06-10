import { productos } from './productosdisp.js';
  



  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
  
    const producto = productos.find((p) => p.id === id);
  
    if (!producto) {
      document.body.innerHTML = "<h2 class='text-white'>Producto no encontrado</h2>";
      return;
    }
  
    document.getElementById("productoNombre").textContent = producto.nombre;
    document.getElementById("productoDescripcion").textContent = producto.descripcion;
    document.getElementById("productoPrecio").textContent = `$${producto.precio.toLocaleString()}`;
    document.getElementById("productoImagen").src = producto.imagen;
  });
  
  





  