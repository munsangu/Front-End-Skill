const download = document.querySelector(".download-btn");
const conutdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleaseWait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadlink = document.querySelector(".manualDownload-link");

let timeleft = 10;
download.addEventListener("click", () => {
  download.style.display ="none";
  conutdown.innerHTML = `Download will begin automatically in <span>${timeleft}</span> seconds`;
  let downloadTimer = setInterval(function timeCount() {
    timeleft--;
    conutdown.innerHTML = `Download will begin automatically in <span>${timeleft}</span> seconds`;
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      pleaseWaitText.style.display = 'block';
      let download_href = 'https://drive.google.com/file/d/11v_10nZ7ha2H-S2KP1nFcZQA1OS6PrXe/view?usp=sharing';
      
      window.location.href = download_href;
      manualDownloadlink.href = download_href;
      setTimeout(() => {
        pleaseWaitText.style.display = 'none';
        manualDownloadText.style.display = 'none';
      },1000);
    }
  }, 1000);
})