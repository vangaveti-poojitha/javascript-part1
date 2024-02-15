//array.forEach()=executes a prvded functn once 
//for each element in array 

let std=['pooji','siuy','kjhg']

std.forEach(capitalize);
std.forEach(print);
function capitalize(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);
  

}

function print(element){
    console.log(element);
}

