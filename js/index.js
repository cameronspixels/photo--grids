window.onload = function() {
  document.getElementById("the--grid").classList.remove('content--loading');
  document.getElementById("loading").classList.add('hide');
}

var firstHidden = document.getElementById('imageHiding1');

var secondHidden = document.getElementById('imageHiding2');

var thirdHidden = document.getElementById('imageHiding3');

function removeHidden() {

  if (firstHidden.classList.contains('hidden')) {

    firstHidden.classList.remove('hidden');

  } else if (secondHidden.classList.contains('hidden')) {

    secondHidden.classList.remove('hidden');

  } else if (thirdHidden.classList.contains('hidden')) {

    thirdHidden.classList.remove('hidden');

  }

}