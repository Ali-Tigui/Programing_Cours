var a;
const did=document.createElement('div');
    document.body.appendChild(did);
cap=function(){
   var m=[],
 el=document.querySelector("input").value;
 el=el.split(" ");
    for(i of el){
        if (i ===""){
            continue;
        }else{
        var a=i[0].toUpperCase();   
        for(j=1;j<i.length;j++){
            a+=i[j];    
        }}   
    m.push(a) 
    }
    m=m.join(' '); 
    did.innerHTML=m;
}
document.querySelector('button').onclick=function(){cap()};

