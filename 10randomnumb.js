



document.getElementById('rollbut').onclick=function(){


    let x=Math.random()*6; 

    x=Math.floor(x);
    x+=1 ;
    
    
    let y=Math.random()*6; 
    
    y=Math.floor(y);
    y+=1 ;
    
    
    let z=Math.random()*6; 
    
    z=Math.floor(z);
    z+=1 ;
    document.getElementById('xlabel').innerHTML=x;
    document.getElementById('ylabel').innerHTML=y;
    document.getElementById('zlabel').innerHTML=z;
}