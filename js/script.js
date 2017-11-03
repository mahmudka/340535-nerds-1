
var contact = document.querySelector(".btn-contact");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");

contact.addEventListener("click",function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  if(storage) {
    login.value = storage;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if(!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("login", login.value);
  }
});


window.addEventListener("keydown", function (evt) {
  if(evt.keyCode==27) {
    if(popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }

});

/* Переключение слайдера*/

var slider1 = document.querySelector("i:nth-child(1)");
var slider2 = document.querySelector("i:nth-child(2)");
var slider3 = document.querySelector("i:nth-child(3)");

var sliderPicture1 = document.querySelector(".slider-1");
var sliderPicture2 = document.querySelector(".slider-2");
var sliderPicture3 = document.querySelector(".slider-3");

slider1.addEventListener("click",function (evt) {
  evt.preventDefault();
  slider2.classList.remove("active");
  sliderPicture2.classList.add("visually-hidden");
  slider3.classList.remove("active");
  sliderPicture3.classList.add("visually-hidden");
  slider1.classList.add("active");
  sliderPicture1.classList.remove("visually-hidden");

});

slider2.addEventListener("click",function (evt) {
  evt.preventDefault();
  slider1.classList.remove("active");
  sliderPicture1.classList.add("visually-hidden");
  slider3.classList.remove("active");
  sliderPicture3.classList.add("visually-hidden");
  slider2.classList.add("active");
  sliderPicture2.classList.remove("visually-hidden");

});

slider3.addEventListener("click",function (evt) {
  evt.preventDefault();
  slider1.classList.remove("active");
  sliderPicture1.classList.add("visually-hidden");
  slider2.classList.remove("active");
  sliderPicture2.classList.add("visually-hidden");
  slider3.classList.add("active");
  sliderPicture3.classList.remove("visually-hidden");

});







