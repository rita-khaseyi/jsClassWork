class Person{
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height;
    }
    greet(){
        console.log('hello');
    }
}
let person=new Person('Rita',21,'5.8ft')
console.log(person);
person.greet()


class Robot extends Person{
    constructor(name,age,height){
        super(name,age,height)
    }
};
let robot=new Robot('Elsa',3,'5ft');
console.log(robot)

class Crazyrobot extends Person{
    constructor(name,age,height,dominance){
        super(name,age,height);
        this.walk=true;
        this.height='7ft';
        this.dominance=dominance;
    }
    world(){
        console.log(`i will ${this.dominance} the world`)
    }
}
let crazy=new Crazyrobot('felix',4,'3ft','enslave')
crazy.world();

class lovingrobot extends Crazyrobot{
    constructor(name,age,height,dominance){
        super(name,age,height,dominance)
    }
}
let loving= new lovingrobot('amanda',10,'5ft','love');
console.log(loving);