/*const greeting=(username)=>console.log(`hello ${username}`);
greeting('bro');*/ 


/*const percent =(number1,number2)=>number1/number2*100;
console.log(`${percent(45,50)}%`);*/


//shuffle 

let cards=['A','2','3','4','5','6','7','8','9','10']

shuffle(cards);

cards.forEach(card=>console.log(card));

function shuffle(array){
    let currentIndex=array.length;
    while(currentIndex!=0){
        let randomIndex=Math.floor(Math.random()*array.length);
        
        currentIndex-=1;
        let temp=array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex]=temp;
    }
    return array;
}