//anonymous obj=obj without a name
//      but directly referenced 
//      less syntax no need for unique names



//with names
/*class card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}

let card1=new card('A','hearts');
let card2=new card('A','spades');
let card3=new card('A','diamonds');
let card4=new card('A','clubs');

let card5=new card('2','hearts');
let card6=new card('2','spades');
let card7=new card('2','diamonds');
let card8=new card('2','clubs');


let cards=[card1,card2,card3,card4,card5,card6,card7,card8];

//console.log(card1.value+card1.suit);

console.log(cards[0].value+cards[0].suit);*/

//without names

class card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}


cards=[
    new card('A','hearts'),
    new card('A','spades'),
    new card('A','diamonds'),
    new card('A','clubs'),
    new card('2','hearts'),
    new card('2','spades'),
    new card('2','diamonds'),
    new card('2','clubs')
    ];


console.log(cards[0].value+cards[0].suit);