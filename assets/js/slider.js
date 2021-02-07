var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//Auto increment
var slideIndexy = 0;
showSlide();

function showSlide() {
  var j;
  var slides = document.querySelectorAll(".mySlides");
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  slideIndexy++;
  if (slideIndexy > slides.length) {slideIndexy = 1}
  slides[slideIndexy-1].style.display = "block";
  setTimeout(showSlide, 5000); // Change image every 2 seconds
}