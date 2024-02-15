//this =    refrences to particular obj the obj 
//          depends on the immediate context
//
//
//
//
//



const car={

    model:'mustang',
    color:'red',
    year:'2023',

    drive:function(){
        console.log('you drive  the car');
    },
    brake:function(){
        console.log(`you apply the brk on ${this.model}`); //if we diewctly use model then we get an error
    }
}


console.log(car.model);
car.brake();
car.drive();

this.name='mycoolwindow'  //if try to use this before declaring an obj then it will chng default settings of our window
console.log(this);



