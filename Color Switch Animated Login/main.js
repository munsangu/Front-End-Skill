let btn = document.getElementById("btn");
let txt = document.getElementById("txt");

function changeColor(color) {
  document.body.style.backgroundColor = color;
  btn.style.backgroundColor = color;
  txt.style.borderLeftColor = color;

  document.querySelectorAll("span").forEach(function(item) {
    item.classList.remove("active");
  })
  event.target.classList.add("active");
}

let colorSpan = document.querySelectorAll(".colors span");
colorSpan.forEach(function(item) {
  item.addEventListener("click", function() {
    changeColor(this.style.backgroundColor);
  })
})