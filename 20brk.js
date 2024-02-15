for(let i=1;i<=20;i+=1){
    if(i==13){
        break;
    }
    else{
        console.log('kkkk')
    }
    console.log(i)
}


for(let i=1;i<=20;i+=1){
    if(i==13){
        continue;

    }
    else{
        console.log('lll')
    }
    console.log(i)
}


//nested loops
for(let j=1;j<=3;j+=1){
    for(let k=1;k<=3;k+=1){
        console.log(j);
    }
}

let rows=window.prompt('enter rows');
let cols=window.prompt('enter cols');
for(let i=1;i<=rows;i+=1){
    for(let j=1;j<=cols;j+=1){
        document.getElementById('label1').innerHTML+=j;

    }
    document.getElementById('label1').innerHTML+='<br>';
}