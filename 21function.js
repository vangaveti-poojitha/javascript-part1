//function 

/*let username='bro'; //global
let age=22;
happybirthday();
happybirthday();



function happybirthday(){
    console.log('hbd grl',username);
    console.log('hbd grl');
    console.log('hbd grl',age);

}*/



/*startprogram();

function startprogram(){
let username='bro'; //error username is not defined
let age=22; 
//let will make this variables know only inbetween these two braces not outside of it
happybirthday();
happybirthday();

}

function happybirthday(){
    console.log('hbd grl',username);
    console.log('hbd grl');
    console.log('hbd grl',age);

}
*/


/*startprogram();

function startprogram(){
let username='bro'; 
let age=22;
happybirthday(username,age);
happybirthday(username,age);

}

function happybirthday(username,age){
    console.log('hbd grl',username);
    console.log('hbd grl');
    console.log('hbd grl',age);

}*/



//return 
let area;
let width;
let height;
width=window.prompt('enter width');
height=window.prompt('enter height');
console.log(typeof width);
area=getarea(width,height);
console.log('the area is',area);
function getarea(width,height){
    let res=width*height;
    return res;

}
