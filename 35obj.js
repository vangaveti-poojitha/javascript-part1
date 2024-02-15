//obj=      a grp of properties and methods
//          properties=what an obj can do
//          methods=wht an obj can do use .to access


const car={

    model:'mustang',
    color:'red',
    year:'2023',

    drive:function(){
        console.log('you drive  the car');
    },
    brake:function(){
        console.log('you apply the brk');
    }
}


console.log(car.model);
car.brake();
car.drive();
