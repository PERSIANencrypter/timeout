var date = new Date();
var fristP = document.getElementById("day");
var secp = document.getElementById("month");
var lol = date.getDate();
var lool = date.getMonth();
var timeoutday = 28
var timoutmont = 4
fristP.innerText = timeoutday - lol;
var newlool = lool+1
secp.innerText = timoutmont - newlool;





