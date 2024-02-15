//constructor=a special method of a class
//              accepts arguments and assigns properties

class student{
    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const s1=new student('pooji',22,9);
const s2=new student('snehi',23,9.8);
console.log(s1.name);
console.log(s1.age);
console.log(s1.gpa);
s1.study();

console.log(s2.name);
console.log(s2.age);
console.log(s2.gpa);
s2.study();

