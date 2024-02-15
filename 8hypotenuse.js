/*let a;
let b;
let c;
a=window.prompt('enter a side length:');
a=Number(a);
b=window.prompt('enter side b:');
b=Number(b);
c=Math.pow(a,2)+Math.pow(b,2);
c=Math.sqrt(c);
console.log(c);*/

let a;
let b;
let c;
document.getElementById('submitbutton').onclick=function(){
    a=document.getElementById('atextbox').value;
    b=document.getElementById('btextbox').value;
    c=Math.pow(a,2)+Math.pow(b,2);
    c=Math.sqrt(c);
    document.getElementById('clabel').innerHTML='side c: '+c;
}

