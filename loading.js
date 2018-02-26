var grid = document.getElementById("griddy");
var loadAnimation = document.getElementById("loading");
grid.className += "js-loading";
window.addEventListener("load", showPage, false);

function showPage() {
  grid.className = grid.className.replace("js-loading", " ");
  loadAnimation.className += "hide";
}