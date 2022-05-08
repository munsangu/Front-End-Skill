var basicTimeline = anime.timeline({
  autoplay: false
});

var pathEls = document.querySelector(".check");
var btn = document.querySelector(".button");
var text = document.querySelector(".text");

for(var i = 0; i < pathEls.length ; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

btn.onclick = function() {
  basicTimeline.play();
  console.log("clicked");
}

text.onclick = function() {
  basicTimeline.play();
}

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button",
    duration: 1300,
    width: 300,
    height: 10,
    backgroudColor: "#2B2D2F",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: '.progress-bar',
    duration: 2000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".progress-bar",
    width: 80,
    height: 80,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: "#71DFBE"
  })
  .add({
    targets: ".check",
    duration: 10,
    opacity: "1"
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: "easeInOutSine"
  })