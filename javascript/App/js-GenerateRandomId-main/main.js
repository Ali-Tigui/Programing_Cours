document.querySelector('button').onclick=function(){
var i,Id="";
    while(Id.length<20){
        i=Math.floor(Math.random()*123);
        if( (i>=48 && i<=57)||(i>=65 && i<=90) || i>=97){
        Id+=String.fromCharCode(i);
        }
        }
document.querySelector('span').textContent=Id;
}