// super    =   refers to the parent class 
//              commonly used to invoke constructor of the parent class



//we get error


/*class animal{

}

class rabit extends animal{
    constructor(name,age,runspeed){
        this.name=name;
        this.age=age;
        this.runspeed=runspeed;
    }

}

class fish extends animal{
    constructor(name,age,swimspeed){
        this.name=name;
        this.age=age;
        this.swimspeed=swimspeed;
    }


}

class hawk extends animal{
    constructor(name,age,flyspeed){
        this.name=name;
        this.age=age;
        this.flyspeed=flyspeed;
    }


}

const rabit1=new rabit('rabbit',1,40);

const fish1=new rabit('fish',2,45);


const hawk1=new rabit('hawk',3,200);

console.log(rabit1.age);*/


//changed to


/*class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }

}

class rabit extends animal{
    constructor(name,age,runspeed){
        super(name,age);
        
        this.runspeed=runspeed;
    }
}

class fish extends animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed=swimspeed;
    }
}

class hawk extends animal{
    constructor(name,age,flyspeed){
        super(name,age);
        this.flyspeed=flyspeed;
    }
}

const rabit1=new rabit('rabbit',1,40);

const fish1=new fish('fish',2,450);


const hawk1=new hawk('hawk',3,200);

console.log(rabit1.age);
console.log(rabit1.name);
console.log(rabit1.runspeed);


console.log(fish1.age);
console.log(fish1.name);
console.log(fish1.swimspeed);

console.log(hawk1.age);
console.log(hawk1.name);
console.log(hawk1.flyspeed);


//if we have child clses and if the child clses have constructors
//  we want to envoke the constructor of the parent cls
// this is useful bcz in each of the child constructor we are using some same code like name and age
*/


