document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortSelect = document.getElementById("sortSelect");
    const productosContainer = document.getElementById("producosContainer");
  
    // Seleccionamos las columnas directamente
    const productosDOM = Array.from(productosContainer.children);
  
    const productos = productosDOM.map((col) => {
      const card = col.querySelector(".card");
      return {
        nombre: card.dataset.nombre.toLowerCase(),
        categoria: card.dataset.categoria,
        precio: parseFloat(card.dataset.precio),
        html: col,
      };
    });
  
    function filtrarYMostrar() {
      const texto = searchInput.value.toLowerCase();
      const categoria = categoryFilter.value;
      const orden = sortSelect.value;
  
      let filtrados = productos.filter((prod) => {
        return (
          prod.nombre.includes(texto) &&
          (categoria === "" || prod.categoria === categoria)
        );
      });
  
      if (orden === "precioAsc") {
        filtrados.sort((a, b) => a.precio - b.precio);
      } else if (orden === "precioDesc") {
        filtrados.sort((a, b) => b.precio - a.precio);
      }
  
      productosContainer.innerHTML = "";
      filtrados.forEach((prod) => productosContainer.appendChild(prod.html));
    }
  
    searchInput.addEventListener("input", filtrarYMostrar);
    categoryFilter.addEventListener("change", filtrarYMostrar);
    sortSelect.addEventListener("change", filtrarYMostrar);
  });
  