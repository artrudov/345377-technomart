//Форма обратной связи
  var link = document.querySelector(".company-contacts__link");

  var popup = document.querySelector(".modal-feedback");
  var close = popup.querySelector(".modal-close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

//Карта
  var mapLink = document.querySelector(".company-contacts__map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });

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


  //Уведомление о добавленном в корзину товаре
    var offerLink = document.querySelector(".company-contacts__map");

    var cartPopup = document.querySelector(".modal-cart");
    var cartClose = cartPopup.querySelector(".modal-close");

    offerLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });

    cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
          cartPopup.classList.remove("modal-show");
        }
      }
    });
