//inheritance   = a child can inherit all the 
//              methods and properties frm anthr cls


class animal{
    alive=true;
    name='animal';
    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class rabit extends animal{
    name='rabbit';
    run(){
        console.log(`this ${this.name} is running`);
    }
}
class fish extends animal{
    name='fish';
    swim(){
        console.log(`this ${this.name} is swimming`);
    }
}


class hawk extends animal{
    name='hawk';
    fly(){
        console.log(`this ${this.name} is flying`);
    }
}

const rabit1=new rabit();
const fish1 =new fish();
const hawk1=new hawk();

console.log(rabit1.alive);
console.log(fish1.alive);
console.log(hawk1.alive);
rabit1.eat();
rabit1.sleep();
rabit1.run();


fish1.eat();
fish1.sleep();
fish1.swim();

hawk1.eat();
hawk1.sleep();
hawk1.fly();

const an=new animal();
console.log(an.alive);
an.eat(); //this undefined is eating
