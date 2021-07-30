//Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e) {
  cursor.setAttribute("style", "top: "+(e.clientY - 30)+"px; left: " +(e.clientX - 30)+"px")
});

document.addEventListener('click', function(e) {
cursor.classList.add("colorChange");

  setTimeout(function() {
    cursor.classList.remove("colorChange");
  }, 200)
});

//Hamburger menu
var menu = document.querySelector(".links");
var ham =  document.querySelector(".s-sidebar__trigger");
var close = document.querySelector(".close");
var menuIcon = document.querySelector(".btn-toggle-nav");

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    close.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    close.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)