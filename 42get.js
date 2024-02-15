//get =binds an obj property to a function 
//      wn that property is accessed 

//set =binds an obj to a function wn that property is assigned


class car{
    constructor(power,gas){
        this._power=power;
        this._gas=gas;

    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas/50*100}%)`
    }
    set gas(value){
        if(value>50){
            value=50;
        }
        else if(value<0){
            value=0;
        }
        this._gas=value;
    }
}

let car1=new car(400,10);
car1.power=46789;//not chngd
car1._power=09090;
car1.gas=-100000;
console.log(car1.power);
console.log(car1.gas);

//getters incrses data security and can perform some additional logic property directly
