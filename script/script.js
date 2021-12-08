// eslint-disable-next-line strict
"use strict";

//Уменьшение header при прокрутке
(function () {
  const header = document.getElementById("header");

  document.addEventListener("scroll", () => {
    const scrollDistanse = window.scrollY,
      clientWidth = window.innerWidth;
    if (clientWidth > 500) {
      if (scrollDistanse > 100) {
        header.style.height = "2.777em";
      } else {
        header.style.height = "5.555em";
      }
    }
  });
})();
