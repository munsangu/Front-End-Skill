const menu = document.querySelector(".context-menu");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const black = document.querySelector("#black");
const cadre = document.querySelector(".cadre");
const firefox = document.querySelector("#firefox");
const IE = document.querySelector("#IE");
const mobile = document.querySelector("#mobile");

// Browsers detection :
var isFirefox = typeof InstallTrigger !== "undefined";
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

function mobileCheck() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

if (mobileCheck() && !isChrome) {
  mobile.style.display = "block";
  mobile.style.backgroundColor = "#0b0b0b";
  cadre.style.cursor = "pointer";
} else if (isFirefox && !CSS.supports("backdrop-filter: blur(25px)")) {
  firefox.style.display = "block";
  firefox.style.backgroundColor = "#0b0b0b";
  cadre.style.cursor = "pointer";
} else if (isIE) {
  IE.style.display = "block";
  IE.style.backgroundColor = "#0b0b0b";
  cadre.style.cursor = "pointer";
}

// Context menu
cadre.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  // Show the context menu
  menu.style.display = "block";

  // just for the pen :
  menu.style.transform = "translate(0)";

  // set position X of the menu
  if (window.innerWidth - e.clientX > menu.offsetWidth + 10) {
    menu.style.left = e.clientX + "px";
  } else {
    menu.style.left = e.clientX - menu.offsetWidth + "px";
  }
  // set position Y of the menu
  if (window.innerHeight - e.clientY > menu.offsetHeight + 10) {
    menu.style.top = e.clientY + "px";
  } else {
    menu.style.top = e.clientY - menu.offsetHeight + "px";
  }
});

// change the background
function changeBackground(color) {
  var url;

  switch (color) {
    case "blue":
      url =
        "https://www.vocowallpaper.com/wallpapers/26/Dark%2C+blue%2C+background%2C+iOS+13--w26532--preview.jpg";
      break;
    case "orange":
      url = "https://wallpapershome.com/images/pages/pic_h/21581.jpg";
      break;
    case "green":
      url =
        "https://www.vocowallpaper.com/wallpapers/27/Green%2C+dark%2C+background%2C+iOS+13--w27008--preview.jpg";
      break;
    default:
      url =
        "https://www.vocowallpaper.com/wallpapers/26/Dark%2C+blue%2C+background%2C+iOS+13--w26532--preview.jpg";
  }

  cadre.style.backgroundImage = "url(" + url + ")";
}

//exit the context menu
window.addEventListener("click", function () {
  menu.style.display = "none";
});

cadre.addEventListener("click", function () {
  IE.style.display = "none";
  firefox.style.display = "none";
  mobile.style.display = "none";
  cadre.style.cursor = "default";
});
