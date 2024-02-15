let count=0;
document.getElementById('decreasebut').onclick=function(){
    count-=1;
    document.getElementById('countlabel').innerHTML=count;

}


document.getElementById('increasebut').onclick=function(){
    count+=1;
    document.getElementById('countlabel').innerHTML=count;

    
}

document.getElementById('resetbut').onclick=function(){
    count=0;
    document.getElementById('countlabel').innerHTML=count;

    
}