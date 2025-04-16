document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
  
    let index = 0;
    const totalSlides = images.length;
    let interval;
  
    // Create dot elements
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll('.dot');
  
    function updateSlider() {
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % totalSlides;
      updateSlider();
    });
  
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlider();
    });
  
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        updateSlider();
      });
    });
  
    function startAutoSlide() {
      interval = setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlider();
      }, 5000);
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    document.querySelector('.slider').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slider').addEventListener('mouseleave', startAutoSlide);
  
    startAutoSlide(); // Begin autoplay on load
  });
  