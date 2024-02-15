let numbers=[1,2,3,4,5,6,7,8];
console.log(...numbers);
let name='poojitha vangaveti'
console.log(...name); 

console.log(Math.max(numbers)); //naN 

let maxi=Math.max(...numbers)
console.log(maxi); //8 
//this is useful when you want to pass varrying amount of arguments
//toa method or a function

/*let class1=['pooji','snhi','chnnu','prvn']
let class2=['poiiu','kjhg','sdfg']
class1.push(class2);
console.log(class1); //array within array [fg,uyf,iu[]]
class2.push(...class1);
console.log(class2);*/
//unpack=sprd oprtr 

//rest parameters
//reprsnts an indifinite number of parameters
//(packs arguments into an array)
let a=1;
let b=2;
let c=3;
let d=5;
let e=7;
let f=9;
console.log(sum(a,b));
function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number; 

    }
    return total;
}

console.log(sum(a,b,c));