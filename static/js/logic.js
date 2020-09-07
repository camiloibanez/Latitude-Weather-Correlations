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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption1");

  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  var captionText2 = document.getElementById("caption2");

  var description = document.getElementById("description");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    dots2[i].className = dots2[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;

  slides2[slideIndex-1].style.display = "block";
  dots2[slideIndex-1].className += " active";
  captionText2.innerHTML = dots2[slideIndex-1].alt;

  if (n == 1) {
    description.innerHTML = "Here the maximum temperature of cities plotted against their latitude. The trend shows that max temperatures decrease the farther from the equator the city is.";
  }

  else if (n == 2) {
    description.innerHTML = "Here the humidity of cities is plotted against their latitude. There doesn't seem to be a strong trend between humidity and latitude.";
  }
  else if (n == 3) {
    description.innerHTML = "Here the cloudiness of cities plotted against their latitude. There seems to be horizontal lines along the easily divisible numbers weathermen like to forecast data on.";
  }
  else {
    description.innerHTML = "Here the wind speed of cities is plotted against their latitude. It appears that higher wind speeds occur farther from the equator.";
  }

}