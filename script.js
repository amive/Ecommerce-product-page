document.getElementById("plus").addEventListener("click", increase);
function increase() {
  var quantity = document.getElementById("quantity");
  var value = quantity.innerHTML;
  ++value;

  quantity.innerHTML = value;
}

document.getElementById("minus").addEventListener("click", decrease);
function decrease() {
  var quantity = document.getElementById("quantity");
  var value = quantity.innerHTML;
  if (value == 0) {
    return;
  } else {
    --value;
  }
  quantity.innerHTML = value;
}
