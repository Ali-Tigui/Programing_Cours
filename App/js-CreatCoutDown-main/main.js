var timer=50,
cot=setInterval(function(){
    var m=Math.floor(timer/60),
        s=timer%60;
    document.querySelector("span").innerHTML=m+':'+s;
    
    timer--
    if(timer<0){
    clearInterval(cot);
         document.querySelector("span").innerHTML="done";
    }
    
}
            ,1000);