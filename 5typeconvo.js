let age=window.prompt('enter your age');

//when we accept input via prompt that will be by default string so we need to type cast it
console.log(typeof age);
age=Number(age);
age+=1;
console.log('happy bday you are',age,'years old');
console.log(typeof age);

let x;
let y;
let z;
x=Number('3.14');
y=String(3.14);
z=Boolean('');
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
