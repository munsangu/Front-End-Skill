let serachButton = document.querySelector("#get");

serachButton.addEventListener("click", () => {
  sendApiRequest();
});

async function sendApiRequest() {
  let API_KEY = "";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  let data = await response.json();
  useApiData(data);
}

function useApiData(data) {
  document.querySelector("#container").innerHTML = data.explanation;
  document.querySelector("#container").innerHTML += `<img src = "${data.url}">`;
}