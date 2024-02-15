let prices=[5,6,7,89,90]
/*for(let i=0;i<prices.length;i+=1){
    console.log(prices[i]);
}*/

/*for(let i of prices){
    console.log(i);
}*/


//sort 

/*let fruits=['banana','apple','orange','mango'];
fruits=fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}*/

//2d array 
let fruits=['apple','mango','banana'];

let veg=['onions','potatoes'];
let meat=['fish','chicken','mutton'];
let g_l=[fruits,veg,meat];
g_l[0][0]='grape'; //changing
for(let lst of g_l){
    for(item of lst){
        console.log(item);
    }
}




