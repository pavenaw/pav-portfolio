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

//Grain animation params
var options = {
    "animate": true,
    "patternWidth": 600,
    "patternHeight": 600,
    "grainOpacity": 0.1,
    "grainDensity": 1,
    "grainWidth": 0.7,
    "grainHeight": 0.7,
  }

  var optionsMobile = {
    "animate": false,
    "patternWidth": 600,
    "patternHeight": 600,
    "grainOpacity": 0.1,
    "grainDensity": 1,
    "grainWidth": 0.7,
    "grainHeight": 0.7,
  }
grained("#grain1", options);
grained("#grain2", options);

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


/* Do i add this?
 (P ● æ ● vi: ● na:) */