console.clear();
const featureEL = document.querySelector(".features");
const featureELs = document.querySelectorAll(".feature");

featureEL.addEventListener("pointermove", (ev) => {
  featureELs.forEach((ibxs) => {
    const rect = ibxs.getBoundingClientRect();
    ibxs.style.setProperty("--x", ev.clientX - rect.left);
    ibxs.style.setProperty("--y", ev.clientY - rect.top);
  });
});
