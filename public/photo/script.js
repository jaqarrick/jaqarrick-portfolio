
$(document).ready(function() {


  $(document).ready(function(){
    $(this).scrollTop(0);
});
  var images = document.querySelectorAll("img");
  images.forEach(function(image) {

    image.onload = function(e) {

      imageLoaded(e.target)
    }

    if (image.complete) imageLoaded(image)

  })

  function imageLoaded(image) {
    image.style.opacity = 1;
    image.style.transition = "opacity 0.8s"
  }



var slider = document.querySelector(".slider");
var content = document.querySelector(".big-container")
var header = document.querySelector("header");
var arrow = document.querySelector("#arrow")
const breakpoint = 569;
var windowWidth = window.innerWidth;
var aboutButton = document.querySelector("#about-button");
var aboutText = document.querySelector("#about-text")
window.onload = function() {
  document.body.style.opacity = 1;
  adjust();

}
window.onresize = function() {
  adjust()
}
function adjust() {
  slider.setAttribute("data-clicked", false);
  if (windowWidth > breakpoint) {
    slider.addEventListener("click", function() {
      if (slider.getAttribute("data-clicked") === "false") {
        slider.style.transform = "translateX(-30px)";
        slider.style.transition = "transform 1s, color 2s";
        slider.style.color = "red";
        slider.setAttribute("data-clicked", true);
      }
      else {
        slider.style.transform = "translateX(-550px)";
        slider.style.transition = "transform 0.5";
        slider.setAttribute("data-clicked", false)
      }
    })

    content.addEventListener("click", function() {
      if (slider.getAttribute("data-clicked") == "true") {
        slider.style.transform = "translateX(-550px)";
        slider.style.transition = "transform 0.5s";
        slider.setAttribute("data-clicked", false);
      }
    })
    var header = document.querySelector("header");
    header.addEventListener("mouseenter", function() {
      if (slider.getAttribute("data-clicked") === "true") {
        slider.style.border = "1px dashed white";
        slider.transition = "border, 2s"
      }
    })
    header.addEventListener("mouseleave", function() {
      slider.style.border = "1px solid red";
      slider.transition = "border, 3s"

    })
  } else if (windowWidth < breakpoint) {
     slider.addEventListener("click", function() {
      if (slider.getAttribute("data-clicked") === "false") {
        slider.style.transform = "translateY(200px)";
        slider.style.transition = "transform 1s";
        slider.setAttribute("data-clicked", true);
      }
      else {
        slider.style.transform = "translateY(662px)";
        slider.style.transition = "transform 0.5";
        slider.setAttribute("data-clicked", false)
      }
    })
    content.addEventListener("click", function() {
      if (slider.getAttribute("data-clicked") == "true") {
        slider.style.transform = "translateY(662px)";
        slider.style.transition = "transform 0.5s";
        slider.setAttribute("data-clicked", false);
      }
    })
  }
}



// Text Nodes for Various Sections
var mailLink = "mailto:jpcarrickphotography@gmail.com"
var instaLink = "https://www.instagram.com/jaqarrick/?hl=en"
var targetBlank = "_blank"
var aboutTextNode = `Jack Carrick is a Seattle-based photographer. Utilizing both film and digital mediums, Jack explores the interactions of color, structure, and substance through portraits, landscapes, and concert photography. <br><br> For any inqueries, contact Jack through <a href="${mailLink}" target="${targetBlank}">email</a> or <a href="${instaLink}"> Instagram.</a>`
aboutText.innerHTML = aboutTextNode;
var bwSection = "35mm b&w";
var colorSection = "35mm color"
var digitalColor = "Digital Color"
var concerts = "Concerts"


// Scroll to top
arrow.addEventListener("click", function() {
  $('html, body').animate({scrollTop: 0}, 900)
})



// GALLERY BUTTONS


document.querySelector(".places").classList.add('currentGal');
document.querySelector('.currentGal').style.opacity = 1;
document.querySelector('#places-button').classList.add('current');

function switchGallery(nextGal, previousGal) {
  previousGal.style.opacity = 0;
  setTimeout(function (){
    // currentGal.style.display = "none";
    previousGal.classList.remove('currentGal');
    nextGal.classList.add('currentGal')
    // currentGal.style.display = "block";

  }, 500);
  setTimeout(function() {
    nextGal.style.opacity = 1;
  }, 550)
}


function switchButton(e) {
  console.log(e)
  var button = document.querySelector('.button.current');
  button.classList.remove('current');
  e.target.classList.add('current');


  //removing the class from first button
  //adding to next button
}

document.querySelectorAll(".button").forEach(function(button) {
  button.addEventListener("click", function(e) {
      var currentGal = document.querySelector(".currentGal");
    // check to see if the html is current gal
      var innerHTML = e.target.innerHTML;
      var galClicked = document.querySelector("."+innerHTML)
      if (galClicked.classList.contains("currentGal") !== true) {
        switchButton(e)
        switchGallery(galClicked, currentGal);
      }
    })
  })

//all gal

//CAPTIONS

document.querySelectorAll("img").forEach(function(image) {
  if (image.getAttribute("data-caption")!==null) {
      var imageCaption = image.getAttribute("data-caption")
      var div = document.createElement("DIV")
      image.setAttribute("alt", imageCaption)
      div.classList.add("caption-holder")
      div.innerHTML = imageCaption
      image.parentNode.appendChild(div)
    }
})





});
