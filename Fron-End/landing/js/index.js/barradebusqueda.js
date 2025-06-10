
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.productos-destacados .card');
  
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      card.parentElement.style.display = title.includes(query) ? 'block' : 'none';
    });
  });
  