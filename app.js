const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let current = 0;
let min = 0;
let max = slides.length - 1;

let prevButton = document.querySelector('.button-prev');
let nextButton = document.querySelector('.button-next');

nextButton.addEventListener('click', function() {
  if (current === max) {
    current = 0;
  } else {
    current += 1;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - current) * 100}%)`;
  });
});

prevButton.addEventListener('click', function() {
  if (current === min) {
    current = max;
  } else {
    current -= 1;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - current) * 100}%)`;
  });
});
