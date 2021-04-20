window.onload=setInterval(function(){
var date=new Date();
var h=date.getHours(),m=date.getMinutes(),s=date.getSeconds();
    if(h<10){
        h='0'+h;
    }
document.querySelector('span').textContent=h+":"+m+":"+s;
},100)