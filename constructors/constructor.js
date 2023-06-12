function person(name,height,age) {
    this.name=name;
    this.age=age;
    this.height=height;
    
}
let person1=new person("angie",'3ft',20);
console.log(person1)

let person2=new person("rita",'5.8ft',21);
console.log(person2)
console.log(person.prototype)

person.prototype.weight=50;
console.log(person.prototype);
console.log(person1.weight);
