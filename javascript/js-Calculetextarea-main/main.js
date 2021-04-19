const el=document.querySelector('span'),
      el2=document.querySelector("textarea");
el2.oninput=function(){
 var m=el2.getAttribute('max-length')-this.value.length;
    el.textContent="it still " +m;
 if(m<=0){
 el.setAttribute("class","dngr")
 }else{el.setAttribute("class","")}}