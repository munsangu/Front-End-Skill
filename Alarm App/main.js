let para = document.getElementById("para");
let text = document.getElementById("txt");
let text2 = document.getElementById("txt2");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

window.addEventListener('load', () => {
  text.placeholder = new Date().getHours();
  text2.placeholder = new Date().getMinutes();
})

btn.addEventListener('click', alerm);
let x;
function alerm() {
  if(text.value && text2.value) {
    x = setInterval(() => {
      setAlarm();
    }, 1000)
  } else {
    alert("ENTER THE HRS AND MINS!")
  }
}

function setAlarm() {
  let d = new Date().toLocaleDateString();
  let then = new Date(`${d} ${text.value}: ${text2.value}`).getTime();
  let now = new Date().getTime();

  let distance = then - now;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  para.innerHTML = `ALARM IN - ${hours} : ${minutes} : ${seconds}`;

  if(distance < 0) {
    clearInterval(x);
    para.innerHTML = `It's ALARM TIME`;
    let audio = new Audio("sound.mp3");
    audio.play();
    btn2.style.visibility = `visible`;
    btn2.addEventListener("click", () => {
      para.innerHTML = ``;
      audio.pause();
      btn2.style.visibility = `hidden`;
      text.value = ``;
      text2.value = ``;
    })
  }
}