let loginBTN = document.querySelector(".loginBTN");
let username = document.querySelector(".username");

loginBTN.addEventListener("click", () => {
  alert(`${username.value}님 환영합니다`);
});

let signUP = document.querySelector(".signup");
signUP.addEventListener("click", () => {
  alert(`${signUP.innerHTML}`);
});

let forgetPW = document.querySelector(".forgetpw");
forgetPW.addEventListener("click", () => {
  alert(`${forgetPW.innerHTML}`);
});
