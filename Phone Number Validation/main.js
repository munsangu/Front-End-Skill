$(document).ready(function() {
  $("body").on("click", '.checkmobile', function() {
    var tdr_regex = /((010)([0-9]{8})\b)/g;
  
    var mobile = $("#mobile").val();
    if(mobile !== "") {
      if(tdr_regex.test(mobile) == false) {
        alert(`Your PHONE NUMBER ${mobile} is not in the correct format!`);
      } else {
        alert(`YOUR PHONE NUMBER ${mobile} is valid!`)
      }
    } else {
      alert(`You have not entered your phone number!`);
    }
  })
})