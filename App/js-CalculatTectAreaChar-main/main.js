const el=document.querySelector("textarea"),spn=document.querySelector("span")

el.oninput=function(){
spn.innerHTML=this.value.length;
}
// =======Remarque =====
/* 
oninput event can used for run function when we use ani type of input like  copy coller 
or  back and remove charcter thos not work on onkeypress


*/