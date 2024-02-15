//easy way to accept input from user

let username1=window.prompt("enter your name");
console.log(username1);

//difficult way with html elements
let username;
document.getElementById('mybutton').onclick=function(){
    username=document.getElementById('mytext').value;
    console.log(username);
    document.getElementById('mylabel').innerHTML='your name is'
}