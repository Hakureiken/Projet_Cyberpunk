
// inscription/connexion
document.getElementById("connexion").addEventListener("click", clickNext);
function clickNext() {
  document.getElementById("animation").style.transform = "translateX(100%)";
  document.getElementById("droite").style.transform = "translateX(-100%)";
  document.getElementById("gauche").style.transform = "translateX(-100%)";
}

document.getElementById("inscription").addEventListener("click", clickNext1);
function clickNext1() {
  document.getElementById("animation").style.transform = "translateX(0px)";
  document.getElementById("gauche").style.transform = "translateX(0px)";
  document.getElementById("droite").style.transform = "translateX(0px)";
}
