// a function passed as a argument to another function is called callbacks

/*let total=sum(2,3);
displayConsole(total);
displayDom(total);

function sum(x,y){
    let result=x+y;
    return result;
}

function displayConsole(output){
    console.log(output);
}
function displayDom(output){
    document.getElementById('mylabel').innerHTML=output;

}
*/
//using callbacks


sum(2,3,displayConsole);
sum(2,3,displayDom);


function sum(x,y,callaback){
    let result=x+y;
    callaback(result);

    
}

function displayConsole(output){
    console.log(output);
}
function displayDom(output){
    document.getElementById('mylabel').innerHTML=output;

}