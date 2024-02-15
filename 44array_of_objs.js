class car{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;

    }
    drive(){
        console.log(`u r driving ${this.model}`)
    }
}

const car1=new car('mustang',2023,'red');
const car2=new car('corvette',2024,'blue');
const car3=new car('lambo',2022,'black');


const cars=[car1,car2,car3];
/*console.log(cars[2].model);
cars[1].drive();*/

startrace(cars);
function startrace(cars){
    for(const car of cars){
        car.drive();
    }
}