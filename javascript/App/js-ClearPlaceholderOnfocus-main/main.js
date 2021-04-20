var inp=document.querySelector('input'),
holder=inp.getAttribute("placeholder");
inp.onfocus=function(){
inp.placeholder="";
}
inp.onblur=function(){
this.placeholder=holder;
}