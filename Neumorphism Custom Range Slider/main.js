let range = document.querySelector(".range");
range.addEventListener("mousemove", rangeSlider);

function rangeSlider() {
  let rangeval = range.value;
  document.getElementById("rangeValue").innerHTML = rangeval;
}



