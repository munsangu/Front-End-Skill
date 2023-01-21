const radiusSlider = document.querySelector("input#radius");
const paddingSlider = document.querySelector("input#padding");

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const radiusDisplay = document.querySelector(".radius-display");
const paddingDisplay = document.querySelector(".padding-display");

function updateRadiusDisplay() {
  radiusDisplay.innerText =
    getComputedStyle(parent).getPropertyValue("--border-radius");
}

function updatePaddingDisplay() {
  paddingDisplay.innerText =
    getComputedStyle(parent).getPropertyValue("--padding");
}

radiusSlider.addEventListener("input", () => {
  parent.style.setProperty("--border-radius", `${radiusSlider.value}px`);
  updateRadiusDisplay();
});

paddingSlider.addEventListener("input", () => {
  parent.style.setProperty("--padding", `${paddingSlider.value}px`);
  updatePaddingDisplay();
});

updateRadiusDisplay();
updatePaddingDisplay();
