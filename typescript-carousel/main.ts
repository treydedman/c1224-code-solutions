// set first slide at first index
let currentSlide = 0;

// query the DOM for slides and dots
const $slides = document.querySelectorAll<HTMLElement>('.slides');
const $dots = document.querySelectorAll<HTMLElement>('.slide-dot');
const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

// check for query errors
if (!$slides) throw new Error('$slides query failed');
if (!$dots) throw new Error('$dots query failed');
if (!$next) throw new Error('$next query failed');
if (!$prev) throw new Error('$prev query failed');

// get total number of slides
const totalSlides = $slides.length;

// function showSlide to show slide
function showSlide(index: number): void {
  // loop to check index
  if (index >= $slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // loop thru slides to display
  for (let i = 0; i < $slides.length; i++) {
    if (i === currentSlide) {
      $slides[i].classList.remove('hidden');
    } else {
      $slides[i].classList.add('hidden');
    }
  }

  // loop thru dot indicators to display
  for (let i = 0; i < $dots.length; i++) {
    if (i === currentSlide) {
      $dots[i].classList.add('fa-solid');
      $dots[i].classList.remove('fa-regular');
    } else {
      $dots[i].classList.remove('fa-solid');
      $dots[i].classList.add('fa-regular');
    }
  }
}

// function for nextSlide
function nextSlide(): void {
  showSlide(currentSlide + 1);
}

// function for prev slide
function prevSlide(): void {
  showSlide(currentSlide - 1);
}

// add delay for button and dot click events
let clickDelay = false;

// add event listeners for buttons with delay on click
if ($next && $prev) {
  $next.addEventListener('click', () => {
    if (!clickDelay) {
      clickDelay = true;
      setTimeout(() => {
        nextSlide();
        resetAutoSlide();
        clickDelay = false;
      }, 3000);
    }
  });

  $prev.addEventListener('click', () => {
    if (!clickDelay) {
      clickDelay = true;
      setTimeout(() => {
        prevSlide();
        resetAutoSlide();
        clickDelay = false;
      }, 3000);
    }
  });
}

// add event listeners for dots with delay on click
for (let i = 0; i < $dots.length; i++) {
  $dots[i].addEventListener('click', () => {
    if (!clickDelay) {
      clickDelay = true;
      setTimeout(() => {
        showSlide(i);
        resetAutoSlide();
        clickDelay = false;
      }, 3000);
    }
  });
}

// slide timer - delay
let autoSlideTimer = setInterval(nextSlide, 3000);

// reset slide timer - delay
function resetAutoSlide(): void {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(nextSlide, 3000);
}

// initialize carousel
showSlide(currentSlide);
