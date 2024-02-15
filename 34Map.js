//map=object that holds key value pairs of any data types
const store=new Map([
    ['t-shirt',20],
    ['jeans',30],
    ['socks',10],
    ['shoes',50],

]);


let shoppingcart=0;
shoppingcart+=store.get('t-shirt');
store.set('hat',40);
store.delete('hat');
console.log(store.has('hat'));  //returs true or false so we directly printed
console.log(shoppingcart);
console.log(store.size);
store.forEach((value,key)=>console.log(`${key}:${value}$`));
