const el=document.querySelector('input'),
      button=document.querySelector('button');
button.onclick=function(){
    if(this.innerHTML=="show"){
    el.setAttribute("type","text");
    this.innerHTML="hide";
    }
else{
   el.setAttribute("type","password");
    this.innerHTML="show";} 
}