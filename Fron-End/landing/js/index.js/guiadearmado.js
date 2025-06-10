document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".animate-title");
    const items = document.querySelectorAll(".animate-list li");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.add("visible");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, index * 300); // animación escalonada
          });
        }
      });
    }, {
      threshold: 0.5 // cuando la mitad del elemento esté visible
    });
  
    const target = document.querySelector("#guiaArmado");
    observer.observe(target);
  });
  