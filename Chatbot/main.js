function talk(){  
  var know = {  
   "누구" : "Hello, TonyStark here 💙",  
   "어떄" : "Good :)",  
   "뭐할까" : "Please Give us A Follow & Like.",  
   "팔로워" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy👪 ",  
   "응" : "Thank You So Much ",  
   "안녕" : "Okay! Will meet soon.."  
  };  
  var user = document.getElementById('userBox').value;  
   document.getElementById('chatLog').innerHTML = user + "<br>";  
  if (user in know) {  
   document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
  }else{  
   document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
  }  
 }  