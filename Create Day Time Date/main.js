let date = new Date();
const elementDate = document.getElementById("printDate")
const elementDay = document.getElementById("printDay")
const elementTime = document.getElementById("printTime")
const listOfDays = ["Sunday", "Monday", "Thusday", "wednesday", "Thurday", "Friday", "Saterday"]

function printDate() {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if(month < 10) {
    month = `0${month}`
  }
  let year = date.getFullYear();
  elementDate.innerHTML = `${year} - ${month} - ${day}`
}

function printDay() {
  date = new Date()
  let numberOfDay  = date.getDay()
  let day = listOfDays[numberOfDay]
  elementDay.innerHTML = `${day}`
}

function printTime() {
  date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  if(seconds < 10) {
    seconds = `0${seconds}`
  }
  if(minutes < 10) { 
    minutes = `0${minutes}`
  }
  if(hours > 12) {
    hours = hours - 12
    elementTime.innerHTML = `PM 0${hours} : ${minutes} : ${seconds}`
  } else if(hours = 0) {
    elementTime.innerHTML = `PM 0${hours} : ${minutes} : ${seconds}`
  }else if(hours < 12) {
    elementTime.innerHTML = `AM 0${hours} : ${minutes} : ${seconds}`
  } else if(hours = 12) {
    elementTime.innerHTML = `PM ${hours} : ${minutes} : ${seconds}`
  }
}

setInterval(function() {
  printTime()
  printDate()
  printDay()
}, 1000)