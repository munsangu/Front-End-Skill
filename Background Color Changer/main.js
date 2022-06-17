function getHex() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 16))];
  }
  return color;
}

function changeColor() {
  let hex = getHex();
  document.getElementById("hex").innerHTML = hex;
  document.getElementsByTagName("BODY")[0].style.backgroundColor = hex;
}

document.querySelector(".btn").addEventListener("click", changeColor);