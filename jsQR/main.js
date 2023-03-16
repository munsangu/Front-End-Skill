const video = document.createElement("video");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const codeReader = new QrScanner(video, (result) => {
  stopScan();
  window.webkit.messageHandlers.scan.postMessage(result);
});

function startScan() {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
      codeReader.start();
    });
}

function stopScan() {
  video.pause();
  video.srcObject.getTracks().forEach((track) => track.stop());
  codeReader.stop();
}

function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = codeReader.decode(
      imageData.data,
      imageData.width,
      imageData.height
    );
    if (code) {
      stopScan();
      window.webkit.messageHandlers.messageHandler.postMessage(code.data);
    }
  }
  if (isScanning) {
    requestAnimationFrame(tick);
  }
}
