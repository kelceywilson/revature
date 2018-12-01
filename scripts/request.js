window.addEventListener("load", function() {
  var price = 0;
  var tip = 0;
  var totalSpan = document.getElementById("total");
  var priceSpan = document.getElementsByName("price");
  var tipSpan = document.getElementsByName("tip");

  // calculate total to 2 decimals based on choices 
  function calculateTotal(price, tip) {
    return (price + price * tip).toFixed(2);
  }

  // add event listeners to meal choice boxes
  for (var i = 0; i < priceSpan.length; i++) {
    priceSpan[i].addEventListener("click", function(event) {
      price = parseFloat(event.target.value);
      totalSpan.innerHTML = calculateTotal(price, tip);
    });
  }

  // add event listeners to tip choice boxes
  for (var i = 0; i < tipSpan.length; i++) {
    tipSpan[i].addEventListener("click", function(event) {
      tip = parseFloat(event.target.value);
      totalSpan.innerHTML = calculateTotal(price, tip);
    });
  }
});
