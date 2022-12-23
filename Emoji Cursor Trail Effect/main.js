let images = [
  "😀",
  "😄",
  "🥲",
  "⭐️",
  "😶‍🌫️",
  "🫥",
  "👿",
  "👌",
  "👈🏻",
  "👨🏻‍🦳",
  "👮‍♀️",
  "👨‍🚀",
  "🫄",
];

document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let emoji = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;

  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;

  let icon = images[Math.floor(Math.random() * images.length)];
  emoji.innerText = icon;

  let size = Math.random() * 50;
  emoji.style.fontSize = `${size + 5}px`;

  let max = 0;
  let min = 200;
  let randomVal = Math.floor(Math.random() * (max + 1) - min + min);
  emoji.style.transform = `translateX(${randomVal}px)`;

  body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 1000);
});
