const inp=document.getElementsByTagName('input');
for(i of inp){
    i.setAttribute("data",i.getAttribute("placeholder"));
    i.onblur=function(){this.setAttribute("placeholder",this.getAttribute("data"))};
i.onfocus=function(){this.removeAttribute("placeholder")};
              }
