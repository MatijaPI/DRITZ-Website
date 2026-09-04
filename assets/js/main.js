const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainMenu.classList.toggle('open');
  });

  mainMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainMenu.classList.remove('open');
    });
  });
}

const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const carouselStatus = document.querySelector('#carousel-status');
const carouselButtons = Array.from(document.querySelectorAll('[data-carousel-action]'));
let currentSlide = 0;
let rotationPaused = false;
let intervalId = null;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function showSlide(index) {
  slides.forEach((slide, i) => {
    const isActive = i === index;
    slide.classList.toggle('active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === index)));
  if (carouselStatus) {
    carouselStatus.textContent = `Prikazana je fotografija ${index + 1} od ${slides.length}.`;
  }
}

function stopRotation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function startRotation() {
  if (slides.length <= 1 || reduceMotion || rotationPaused || intervalId) {
    return;
  }
  intervalId = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4500);
}

if (slides.length > 1) {
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  carouselButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.carouselAction;
      if (action === 'prev') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
      if (action === 'next') {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
      if (action === 'toggle') {
        rotationPaused = !rotationPaused;
        button.setAttribute('aria-pressed', String(rotationPaused));
        button.textContent = rotationPaused ? 'Nadaljuj vrtenje' : 'Ustavi vrtenje';
      }
      stopRotation();
      startRotation();
    });
  });

  showSlide(currentSlide);
  startRotation();
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}
