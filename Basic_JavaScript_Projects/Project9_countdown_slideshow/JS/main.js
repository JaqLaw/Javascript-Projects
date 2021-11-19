function countdown() {          //countdown function
    var seconds = document.getElementById("seconds").value;     //gets input value

    function tick() {           //nested function for counting down
        seconds = seconds - 1;      //countdown by 1
        timer.innerHTML = seconds;      //display seconds
        var time = setTimeout(tick, 1000);      //running tick function every 1s
        if (seconds == -1) {            //display time's up after countdown hits -1
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}


var slideIndex = 1;         //show correct slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {           //function for changing slide
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {      //function for when you click the dots
  showSlides(slideIndex = n);
}

function showSlides(n) {            //function for showing the correct slide and displaying matching info
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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