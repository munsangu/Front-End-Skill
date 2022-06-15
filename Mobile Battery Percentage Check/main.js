const BattryLevel = document.querySelector(".battry");  
navigator.getBattery().then(function (battery) {  
 const level = battery.level;  
 const status = level * 100 + "%";  
 BattryLevel.innerHTML = status;  
});  