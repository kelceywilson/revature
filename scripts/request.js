var total = 0;
var price = 0;
var tip = 0;
var totalSpan = document.getElementById("total");
var priceSpan = document.getElementsByName("price");
var tipSpan = document.getElementsByName("tip");

function calculateTotal(price, tip) {
  return (price + price * tip).toFixed(2);
}

for (var i = 0; i < priceSpan.length; i++) {
  priceSpan[i].addEventListener("click", function(event) {
    price = parseFloat(event.target.value);
    totalSpan.innerHTML = calculateTotal(price, tip);
  });
}

for (var i = 0; i < tipSpan.length; i++) {
  tipSpan[i].addEventListener("click", function(event) {
    tip = parseFloat(event.target.value);
    totalSpan.innerHTML = calculateTotal(price, tip);
  });
}
