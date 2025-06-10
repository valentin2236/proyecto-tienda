import { productos } from "./productosdisp.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    document.body.innerHTML = "<h2 class='text-white'>Producto no encontrado</h2>";
    return;
  }

  // Mostrar detalles principales
  document.getElementById("productoNombre").textContent = producto.nombre;
  document.getElementById("productoDescripcion").textContent = producto.descripcion;
  document.getElementById("productoPrecio").textContent = `$${producto.precio.toLocaleString()}`;
  document.getElementById("productoImagen").src = producto.imagenes?.[0] || producto.imagen;

  // Miniaturas dinámicas (múltiples imágenes)
  const miniaturasContainer = document.querySelector(".miniaturas");
  miniaturasContainer.innerHTML = ""; // Limpiar

  (producto.imagenes || [producto.imagen]).forEach((imgUrl, index) => {
    const mini = document.createElement("img");
    mini.src = imgUrl;
    mini.className = "carrusel-img border border-light";
    mini.style.width = "50px";
    mini.style.cursor = "pointer";
    if (index === 0) mini.classList.add("active");
    mini.addEventListener("click", () => {
      document.getElementById("productoImagen").src = imgUrl;
      document.getElementById("zoom-lens").style.backgroundImage = `url(${imgUrl})`;
      document.querySelectorAll(".carrusel-img").forEach(i => i.classList.remove("active"));
      mini.classList.add("active");
    });
    miniaturasContainer.appendChild(mini);
  });

  // Zoom con lupa
  const productoImagen = document.getElementById("productoImagen");
  const zoomLens = document.getElementById("zoom-lens");

  productoImagen.addEventListener("mousemove", function (e) {
    const rect = productoImagen.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensWidth = zoomLens.offsetWidth;
    const lensHeight = zoomLens.offsetHeight;
    let lensX = x - lensWidth / 2;
    let lensY = y - lensHeight / 2;

    lensX = Math.max(0, Math.min(lensX, rect.width - lensWidth));
    lensY = Math.max(0, Math.min(lensY, rect.height - lensHeight));

    zoomLens.style.display = "block";
    zoomLens.style.left = `${lensX}px`;
    zoomLens.style.top = `${lensY}px`;
    zoomLens.style.backgroundImage = `url(${productoImagen.src})`;
    zoomLens.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`;
    zoomLens.style.backgroundPosition = `-${x * 2 - lensWidth / 2}px -${y * 2 - lensHeight / 2}px`;
  });

  productoImagen.addEventListener("mouseleave", () => {
    zoomLens.style.display = "none";
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  productoImagen.addEventListener("click", () => {
    lightboxImg.src = productoImagen.src;
    lightbox.classList.remove("d-none");
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.add("d-none");
  });

  // Especificaciones
  const specs = document.getElementById("tablaEspecificaciones");
  for (const [clave, valor] of Object.entries(producto.especificaciones)) {
    const fila = document.createElement("tr");
    fila.innerHTML = `<th>${clave}</th><td>${valor}</td>`;
    specs.appendChild(fila);
  }

  // Productos similares y más productos
  const similares = productos.filter(
    (p) => p.categoria === producto.categoria && p.id !== producto.id
  );
  renderProductos(similares, "productosSimilares");

  const otros = productos.filter((p) => p.id !== producto.id).slice(0, 10);
  renderProductos(otros, "masProductos");

  // Envío
  document.getElementById("formEnvio").addEventListener("submit", (e) => {
    e.preventDefault();
    const cp = document.getElementById("codigoPostal").value;
    const base = 1500;
    const adicional = cp.startsWith("1") ? 500 : 1000;
    document.getElementById("resultadoEnvio").textContent =
      `Costo estimado de envío: $${(base + adicional).toLocaleString()}`;
  });

  // Stock y garantía
  document.getElementById("stockProducto").textContent =
    producto.stock > 0 ? `${producto.stock} unidades disponibles` : "Sin stock";
  document.getElementById("garantiaProducto").textContent =
    producto.garantia || "No especificada";

  // Agregar al carrito
  document.getElementById("btnAgregarCarrito").addEventListener("click", () => {
    alert(`Producto agregado al carrito: ${producto.nombre}`);
  });

  activarCarruseles();
});

// Carrusel de productos
function activarCarruseles() {
  document.querySelectorAll(".carrusel-container").forEach((container) => {
    const carrusel = container.querySelector(".carrusel");
    const btnLeft = container.querySelector(".carrusel-btn.left");
    const btnRight = container.querySelector(".carrusel-btn.right");

    btnLeft.addEventListener("click", () => {
      carrusel.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      carrusel.scrollBy({ left: 300, behavior: "smooth" });
    });
  });
}

function renderProductos(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";
  lista.forEach((p) => {
    const card = document.createElement("div");
    card.className = "col-md-3 mb-4";
    card.innerHTML = `
      <div class="card bg-dark text-white h-100">
        <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">$${p.precio.toLocaleString()}</p>
          <a href="productos1.html?id=${p.id}" class="btn btn-warning">Ver más</a>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}
