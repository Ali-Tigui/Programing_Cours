//Regular Expression
//\d-->any number \w-->any charecter \s--> space
//[] used for regle exapmle: [0-7];
//{} used for column exapmle \d{5} it mean we want 20 number
// * used for column \w* mean enter or not enter char
// + mean enter 1 or more from this type \w+
//? mean enter 1 or no for this char \d?
//() for combine example (\d[a-z]\d)? -->4h5
// | mean or example (ex1)|(ex2)|(ex3);
//\+ or \* or \? \. mean make user enter + * ?
// . ingore columen
//^mean the start $ mean end
//^d$ mean accept only number we can use/\^d+$/ accept only number
//we can use /^\+213\d{8}$/ start with +213 and contain 8 number 
//=========== Application=========
window.inp1.onblur=function(){
    var msg=window.inp1.value.search(/\d/);
     msg2=window.inp1.value.search(/\Ali/),
     msg3=window.inp1.value.search(/\ali/i),//don"t respect cher caitalization
    msg4=window.inp1.value.search(/\d*/),
    msg5=window.inp1.value.search(/\d+/),
    msg6=window.inp1.value.search(/\d?/);
window.h.textContent=msg;
window.h2.textContent=msg2;
window.h3.textContent=msg3;
window.h4.textContent=msg4;
window.h5.textContent=msg5;
window.h6.textContent=msg6;
}
//========== application2 test input =======
window.inp2.onblur=function(){
    var patt=/\^d+$/,
        text=window.inp2.value;
    var b=patt.test(text);// this retunr true if or value contain 
    //exprision else return false
    console.log(b);
}
//========app3 Enter more then 1 name ========
// t=/^[a-z]+(/s[a-z]+)*$/