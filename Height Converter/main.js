document.getElementById("submit").addEventListener("click", heightConverter);
document.getElementById("reset").addEventListener("click", reset);

function heightConverter() {
  let cm = parseInt(document.getElementById("cm").value);

  if(!cm) {
    document.getElementById("result_alert").innerHTML = 'Write a value, please';
    setTimeout(() => {document.getElementById("result_alert").innerHTML = '';}, 2000);
    return false;
  }

  let feet = cm * 0.0328084;
  let inch = cm * 0.393701;
  let n = feet.toFixed(0);
  let m = inch.toFixed(0);

  document.getElementById("result_feet").innerHTML = `${n}feet`;
  document.getElementById("result_inches").innerHTML = `${m}inch`;
}

function reset() {
  document.getElementById("result_feet").innerHTML = '';
  document.getElementById("result_inches").innerHTML = '';
}

