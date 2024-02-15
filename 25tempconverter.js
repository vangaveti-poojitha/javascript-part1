
document.getElementById('submitbut').onclick=function(){
let temp;

if(document.getElementById('c').checked){
    temp=document.getElementById('temperature').value;
    temp=Number(temp);
    document.getElementById('converter').innerHTML=toc(temp);

}
else if(document.getElementById('f').checked){
    temp=document.getElementById('temperature').value;
    temp=Number(temp);
    document.getElementById('converter').innerHTML=tof(temp);

}
else{
    document.getElementById('converter').innerHTML='select a unit'
}


function toc(temp){
    return (temp-32)*(5/9);
}
function tof(temp){
    return (temp)*9/5+32;}

}
