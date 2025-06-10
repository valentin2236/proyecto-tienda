
  const captions = document.querySelectorAll('.carousel-caption');
  const carousel = document.getElementById('carouselExampleFade');

  carousel.addEventListener('slide.bs.carousel', () => {
    captions.forEach(caption => {
      caption.classList.remove('animate-text');
      void caption.offsetWidth; // Forzar reflow
      caption.classList.add('animate-text');
    });
  });


