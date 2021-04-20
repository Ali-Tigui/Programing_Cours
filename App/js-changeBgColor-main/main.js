var el=document.getElementsByTagName("span");
for(i of el){
    i.onclick=function(){
document.body.setAttribute("style","background:" + this.innerHTML+";")
}
}