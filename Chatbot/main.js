function talk(){  
  var know = {  
   "λκ΅¬" : "Hello, TonyStark here π",  
   "μ΄λ" : "Good :)",  
   "λ­ν κΉ" : "Please Give us A Follow & Like.",  
   "νλ‘μ" : "I have my family of 5000 members, i don't have follower ,have supportive Famiyπͺ ",  
   "μ" : "Thank You So Much ",  
   "μλ" : "Okay! Will meet soon.."  
  };  
  var user = document.getElementById('userBox').value;  
   document.getElementById('chatLog').innerHTML = user + "<br>";  
  if (user in know) {  
   document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
  }else{  
   document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
  }  
 }  