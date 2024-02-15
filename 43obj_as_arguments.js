class car{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;

    }
}

const car1=new car('mustang',2023,'red');
const car2=new car('corvette',2024,'blue');
const car3=new car('lambo',2022,'black');

displayinfo(car1);
//console.log(car1); //car {model: 'mustang', year: 2023, color: 'red'}

changecolor(car3,'yellow');
displayinfo(car3);
//to display 
function displayinfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);

}

//to chng color of car
function changecolor(car,color){
    car.color=color;
}