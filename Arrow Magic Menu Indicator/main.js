let marker = document.querySelector("#marker");
let itme = document.querySelectorAll("ul li a");

function Indicator(e) {
  marker.style.top = `${e.offsetTop}px`;
  marker.style.width = `${e.offsetWidth}px`;
}

itme.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    Indicator(e.target)
  })
})

