function circle() {
  let amount = 100;
  let body = document.querySelector("body");
  let i = 0;
  while(i < amount) {

    let el = document.createElement('i');
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 10;

    let size = Math.random() * 250;
    el.style.width = 10 + size + 'px';
    el.style.height = 10 + size + 'px';
    el.style.left = posX + 'px';
    el.style.animationDelay = delay + 's'; 
    el.style.animationDirection = 5 + duration + 's';
    el.style.webkitBoxShadow = "0 30px 50px #0002"; 

    body.appendChild(el);
    i++;
  }
}

circle();