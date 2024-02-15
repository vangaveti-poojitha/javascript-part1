//nested functions=functions inside another function 


/*let username='bro';
let userinbox=0;
displayusername();
displayuserinbox(); //here we have direct access

function login(){
    
    displayusername();
    displayuserinbox();

}
function displayusername(){
    console.log(`welcome ${username}`);

}

function displayuserinbox(){
    console.log(`you have ${userinbox} newmessages`);

}*/



let username='bro';
let userinbox=0;
//displayusername();
//displayuserinbox(); //here we  dont have direct access we must login 
login(); //here we can get access to the functions

function login(){
    
    displayusername();
    displayuserinbox();


function displayusername(){
    console.log(`welcome ${username}`);

}

function displayuserinbox(){
    console.log(`you have ${userinbox} newmessages`);
}
}