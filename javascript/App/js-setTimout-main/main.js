var i=0,l=0,s=15, fonc1=setInterval(function(){
    window.i1.style.left=i++;
    if(i>400){
        clearInterval(fonc1)
    }
},10),fonc2;
function move(){
    window.i2.style.left=3;
    window.i2.style.top=3;
    fonc2=setTimeout(move2,10);
}
function move2(){
    window.i2.style.left=0;
    window.i2.style.top=0;
    fonc2=setTimeout(move,10);
}
window.i2.onmouseover=move;
window.i2.onmouseout=function() {clearTimeout(fonc2)};
var fonc3=setInterval(function(){
    document.querySelector("h3").style.fontSize=l++;
    if(l>50){
        clearInterval(fonc3);
    }
},100);
var fonc4=setInterval(function(){
    window.spn.textContent=s--;
    if(s<-1){
        window.spn.style.display='none';
        document.querySelector('span').style.display="none";
        document.querySelector('a').style.display="inline-block";
        clearInterval(fonc4);
    }
},500)