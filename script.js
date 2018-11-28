var zipInput = document.getElementById("zip-search");
var go = document.getElementById("go");
var answerDiv = document.getElementById("answer");

function zipCheck(zipcode) {
  var zips = [
    94701,
    94702,
    94703,
    94704,
    94705,
    94706,
    94707,
    94708,
    94709,
    94710,
    94712,
    94720
  ];
  for (let i = 0; i < zips.length; i++) {
    if (zips[i] == zipcode) {
      return "We’ve got your area covered!";
    }
  }
  return "Sorry, we haven’t expanded to that area yet.";
}

go.addEventListener("click", function() {
  var answer = zipCheck(zipInput.value);
  answerDiv.innerHTML = answer;
});
window.addEventListener("load", function() {
  console.log("All assets are loaded");
  var banner =
    '<div><a href="https://movetool.herokuapp.com/" target="_blank"><img src="chimpy.gif" alt="advertisement"/></a><span class="close">X</span></div';
  var adDiv = document.getElementById("banner");

  console.log(adDiv);
  setTimeout(function() {
    adDiv.innerHTML = banner;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      adDiv.style.display = "none";
    };
  }, 5000);
});
