//Слайдер
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function currentDiv(n) {
showDivs(slideIndex = n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("promo-carousel__slide");
var dots = document.getElementsByClassName("promo-carousel__badge");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" promo-carousel__badge", "");
}
x[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " promo-carousel__badge";
}


//Переключение сервисов
function openTabs(evt, tabsName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("accordion-content__item");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" accordion-label__active", "");
  }
  document.getElementById(tabsName).style.display = "block";
  evt.currentTarget.className += " accordion-label__active";
}   
