function me(url){
    if(url !== ''){
        window.location=url
    }
};
document.querySelector("button").onclick=function(){me("http://www.google.com")}