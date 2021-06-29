window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".header");
  let navbarCollapseFixed = document.querySelector(".navbar-collapse");
  if (window.scrollY > 10) {
    navbarFixed.classList.add("header-fixed");
  } else {
    navbarFixed.classList.remove("header-fixed");
  }
  if (window.scrollY > 300) {
    navbarFixed.classList.add("header-sticky");
    if (window.innerWidth < 576) {
      navbarCollapseFixed.style.left = "-35%";
    }
    if (window.innerWidth < 768) {
      navbarCollapseFixed.style.left = "-26%";
    }
    if (window.innerWidth < 992) {
      navbarCollapseFixed.style.left = "-20%";
    }
    if (window.innerWidth < 1200) {
      navbarCollapseFixed.style.left = "-15.5%";
    }
    // navbarCollapseFixed.classList.add("navbar-collapse--responsive");
  } else {
    navbarFixed.classList.remove("header-sticky");
    navbarCollapseFixed.style.left = "0%";
    // navbarCollapseFixed.classList.remove("navbar-collapse--responsive");
  }
};

$(document).ready(function () {
  $(".navbar ul.navbar-toggler").click(function () {
    $("body").toggleClass("windows--active");
    // $("body").toggleClass("animate__animated animate__fadeInLeft");

    $(this).toggleClass("active");
    $(".navbar-brand").toggleClass("nav--responsive");
    $(".header").toggleClass("header--height");
  });
});
