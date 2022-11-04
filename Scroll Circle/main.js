let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");

window.addEventListener("scroll", function () {
  let val = window.scrollY;
  sec1.style.clipPath = `circle(${val * 1.15}px at 0 0)`;
  sec2.style.clipPath = `circle(${val * 0.85}px at 100% 100%)`;
});
