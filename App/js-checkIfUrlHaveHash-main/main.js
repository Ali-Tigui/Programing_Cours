//window.onload=function(){
//if(document.URL.indexOf("#ali")!=-1){
//console.log("good")
//}
//}
// **** but this can throw errore  we can use location.hash it more applique
var hash=window.location.hash.substring(1);
if(hash==="ali"){
    console.log("good")
}
   else{
       console.log("bad")
   }
//we can add condition mak function work only if ther is hash in our url