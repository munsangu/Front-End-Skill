let btn = document.querySelector("#generate");
let clearBtn = document.querySelector("#clear");

btn.addEventListener("click", () => {
  document.querySelector("#qr-image").style.display = 'block';
  let QRtext = document.querySelector("#text").value;
  if(QRtext.trim().length == 0) {
    document.querySelector("#qr-image .error").innerHTML = "Please enter Text";
    document.querySelector("#img").style.display = 'none';
  } else {
    document.querySelector("#img").style.display = 'block';
    document.querySelector("#qr-image .error").innerHTML = '';
    document.querySelector("#img").src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${QRtext}`;
  }
});

clearBtn.addEventListener("click", () => {
  document.querySelector("#text").value = '';
  document.querySelector("#qr-image").style.display = 'none';
  document.querySelector("#qr-image .error").innerHTML = '';
})