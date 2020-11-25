const images = [
  'img/carousel-2.jpg',
  'img/carousel-3.jpg',
  'img/carousel-4.jpg',
  'img/carousel-5.jpg',
  'img/carousel-6.jpg',
  'img/carousel-7.jpg'
]
let currentIdx = 0;
function slide() {
  currentIdx = ++currentIdx > images.length - 1 ? 0 : currentIdx;
  showSlide(currentIdx);
}
setInterval(slide, 3000);
function back() {
  currentIdx = --currentIdx < 0 ? images.length - 1 : currentIdx;
  showSlide(currentIdx);
}
document.querySelector('.carousel .btn-back').addEventListener('click', back);
function next() {
  currentIdx = ++currentIdx > images.length - 1 ? 0: currentIdx;
  showSlide(currentIdx);
}
  document.querySelector('.carousel .btn-next').addEventListener('click', next);
function showSlide(idx) {
  document.querySelector('.carousel img').src = images[idx];
}
