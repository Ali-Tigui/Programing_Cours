const btn1 =document.querySelector('.btn-top'),
       btn2 =document.querySelector('.btn-bottom');
btn2.onclick=function(){
        scrollTo(0,document.body.offsetHeight)
    }
btn1.onclick=function(){
            scrollTo(0,0)
        }
window.scrollBy=20;
window.onscroll=function(){   
if(scrollY==0 ){
btn1.style.display="none";
btn2.style.display="block"
    
}else if(scrollY<1500){
btn1.style.display="block" 
btn2.style.display="block"
} else{
      btn2.style.display="none";
    btn1.style.display="block" 
    }}