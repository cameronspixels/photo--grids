var grid = document.getElementById("the--grid");
var loadingAnimation = document.getElementById("loading");


window.onload = function() {
  grid.classList.remove('content--loading');
  loadingAnimation.classList.add('hide');
}

var firstHidden = document.getElementById('imageHiding1');
var secondHidden = document.getElementById('imageHiding2');
var thirdHidden = document.getElementById('imageHiding3');
var forthHidden = document.getElementById('imageHiding4');
var fifthHidden = document.getElementById('imageHiding5');
var sixthHidden = document.getElementById('imageHiding6');
var seventhHidden = document.getElementById('imageHiding7');

function removeHidden() {
  if (firstHidden.classList.contains('hidden')) {
    firstHidden.classList.remove('hidden');
  } else if (secondHidden.classList.contains('hidden')) {
    secondHidden.classList.remove('hidden');
  } else if (thirdHidden.classList.contains('hidden')) {
    thirdHidden.classList.remove('hidden');
  } else if (forthHidden.classList.contains('hidden')) {
    forthHidden.classList.remove('hidden');
  } else if (fifthHidden.classList.contains('hidden')) {
    fifthHidden.classList.remove('hidden');
  } else if (sixthHidden.classList.contains('hidden')) {
    sixthHidden.classList.remove('hidden');
  } else if (seventhHidden.classList.contains('hidden')) {
    seventhHidden.classList.remove('hidden');
  }
}