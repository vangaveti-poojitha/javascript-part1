//static= belongs to the class,not the obj
//      properties:useful for caches,fixed configuration,
//      methods:useful for utility functions


/*class car{
    numb=0;
    constructor(model){
        this.model=model;
        this.numb+=1;
    }
}

const c1=new car('santro');
const c2=new car('benz');
const c3=new car('bmw');
console.log(c1.numb);//1

console.log(c2.numb);//1
console.log(c3.numb);//1*/


//changed to


/*class car{
    static numb=0;
    constructor(model){
        this.model=model;
        car.numb+=1;
    }
    startrace(){
        console.log('3...2..1..go');
    }
}

const c1=new car('santro');
const c2=new car('benz');
const c3=new car('bmw');
console.log(car.numb);//3

c1.startrace(); //3..2..1 go
c2.startrace();//3..2..1 go*/


//changed to 


/*class car{
    static numb=0;
    constructor(model){
        this.model=model;
        car.numb+=1;
    }
    static startrace(){
        console.log('3...2..1..go');
    }
}

const c1=new car('santro');
const c2=new car('benz');
const c3=new car('bmw');
console.log(car.numb);//3

car.startrace(); //3..2..1 go*/







