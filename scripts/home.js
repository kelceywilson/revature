window.addEventListener("load", function() {
  var zipInput = document.getElementById("zip-search");
  var go = document.getElementById("go");
  var answerDiv = document.getElementById("answer");
  var adDiv = document.getElementById("banner");
  var banner =
    '<div><a href="https://movetool.herokuapp.com/" target="_blank"><img src="chimpy.gif" alt="advertisement"/></a><span class="close">X</span></div';

  // checks if zip is covered and provides feedback
  function zipCheck(zipcode) {
    var zips = [94701, 94702, 94703, 94704, 94705, 94706, 94707, 94708, 94709, 94710, 94712, 94720];
    for (let i = 0; i < zips.length; i++) {
      if (zips[i] == zipcode) {
        return "We have your area covered! <a href='request.html'><button>Request Driver Now</button></a>";
      }
    }
    return "Sorry, we have not expanded to that area yet. Try 94720";
  }

  // runs zipCheck if go button is clicked
  go.addEventListener("click", function() {
    var answer = zipCheck(zipInput.value);
    answerDiv.innerHTML = answer;
  });

  // inserts banner ad 5 seconds after window loads
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
