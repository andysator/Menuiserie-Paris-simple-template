let hamburgerIcon = document.querySelector(".hamburger-menu");
let menuIcon = document.querySelector(".menu-icon");
let menuShowHide = document.querySelector(".menu-show-hide");
let mobileHide = document.querySelector(".mobile-hide");

let isOpen = false;

hamburgerIcon.addEventListener("click", function () {
    if (isOpen) {
        menuShowHide.style.transform = "translateX(0)";
        mobileHide.classList.remove("d-flex");
        mobileHide.classList.add("d-none");
    } else {
        menuShowHide.style.transform = "translateX(55px)";
        mobileHide.classList.remove("d-none");
        mobileHide.classList.add("d-flex");
    }

    isOpen = !isOpen;
});

/*

FIXING THE MARGIN TOP OF THE ABOUT DIV

*/

let about = document.querySelector(".about");

function handleScreenWidth() {
    if (window.innerWidth <= 991) {
        about.classList.add("about-small");
        about.classList.remove("about-large");
    } else {
        about.classList.add("about-large");
        about.classList.remove("about-small");
    }


}

handleScreenWidth();

window.addEventListener("resize", handleScreenWidth);

/* the gallery section */

document.addEventListener("DOMContentLoaded", function() {
    var realImgElements = document.querySelectorAll(".real-img");
    var mainImage = document.querySelector(".real-img-main img");

    realImgElements.forEach(function(element) {
      element.addEventListener("click", function() {
        mainImage.src = element.src;
      });
    });
  });