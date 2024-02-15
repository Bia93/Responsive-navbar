const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
burger.addEventListener("click", function () {
  //console.log(nav.classList);
  //console.log(nav.classList.contains("random")); //is false because there is no random class in nav
  //console.log(nav.classList.contains("nav-links")); //is true because the is nav -links class in nav
  //if (nav.classList.contains("new-active")) { varianta 1-LOGICA DIN SPATE fara toggle
  // nav.classList.remove("new-active");
  //} else {
  // nav.classList.add("new-active");
  //}
  nav.classList.toggle("new-active"); // varianta a 2-a, dar cu toggle
  //ANIMATE LINKS WITH FOr EACH DEOARECE E UN ARRAY
  navLinks.forEach(function (links, index) {
    links.style.animation = `navLinksFade 0.5 ease forwards ${
      index / 7 + 1.5
    }s`;
  });
});
