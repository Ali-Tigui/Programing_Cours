document.querySelector('input').onkeypress=function(){
document.querySelector('h1').textContent=this.value;
}
document.querySelector('textarea').onkeypress=function(){
document.querySelector('p').textContent=this.value;
}