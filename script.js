var d=document.querySelector("#days");
var h=document.querySelector("#hrs");
var m=document.querySelector("#min");
var s=document.querySelector("#sec");
function bday(){
const currentyear=new Date().getFullYear();
const currentmonth=new Date().getMonth();
const currentdate=new Date().getDate();
//const nextbirthday=new Date();
if (currentmonth>=1 && currentdate>=24){
   var nextbirthday=new Date( `February 24 ${currentyear+1} 00:00:00`);
}
else{
    var nextbirthday=new Date(`February 24 ${currentyear} 00:00:00`);
}

const today=new Date();
const diff=nextbirthday-today;
const days=Math.floor(diff/1000/60/60/24);
const hours=Math.floor((diff/1000/60/60)%24);
const minutes=Math.floor((diff/1000/60)%60);
const seconds=Math.floor((diff/1000)%60);
//console.log(days + " "+hours+ " " +minutes+" " +seconds);
d.innerHTML=days<10? "0"+days:days;
h.innerHTML=hours<10? "0"+hours:hours;
m.innerHTML=minutes<10? "0"+minutes:minutes;
s.innerHTML=seconds<10? "0"+seconds:seconds;
if (today==nextbirthday ){
    window.location.href="wish.html";
}

}
setInterval(bday,1000);