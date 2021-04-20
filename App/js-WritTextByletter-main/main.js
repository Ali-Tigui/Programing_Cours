
const text="hello from my web i hope this will be awsome",
el2=document.querySelector("div");
document.getElementsByTagName('button')[0].onclick=function(){
    var i=0, type=setInterval(function(){
        
        el2.textContent+=text[i];
    i++ 
 if(i>=text.length){
     
        clearInterval(type);
     
    }},300)}
document.getElementById('cl').onclick=function(){
    el2.textContent="";
    
}