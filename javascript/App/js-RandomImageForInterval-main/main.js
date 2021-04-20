const li=["img/01.png","img/02.png","img/03.png","img/04.png","img/05.png","img/06.png","img/07.png"],
el=document.querySelector("img");var i=0;
el.setAttribute("src",li[i]);
window.onload=setInterval(function(){
i=Math.floor(Math.random()*li.length)
    el.setAttribute("src",li[i])
    
},2000)