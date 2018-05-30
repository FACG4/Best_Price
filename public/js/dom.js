var slideIndex = 0;
showSlides();

function showSlides() {
<<<<<<< HEAD
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
=======
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.visibility = 'hidden';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.visibility = 'visible';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
>>>>>>> 9edcdf7e67172e802d3dfc4e21343be71de089cb
