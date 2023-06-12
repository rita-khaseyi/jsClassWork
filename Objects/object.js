//Create an object
let person={
    name:"Ann",
    age:20,
    friend:{
        name:"Amamnda",
        age:21,
        myFriend:{
            name:"Susan",
            age:21
        }
    }
}

let person2=new Object();
person2.name="Ann";
person2["age"]=30;
console.log(person2);
person['age']=56;//updating property
console.log(person)

console.log(person.name);//access a property
console.log(person.friend.myFriend.name);
console.log(person["friend"]["myFriend"]["name"]);

delete person.age;//deleting
console.log(person);

let person3=Object.assign(person);//cloning an object
console.log(person3);

let keys=Object.keys(person3);
console.log(keys);




