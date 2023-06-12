let a=20 //global variable-accessed everywhere

function add(b) {
    console.log(a+b);
    let c=30;//local variable-accessible in the scope defined
    console.log(a+b+c);
}
add(30);
console.log(a)
//console.log(c);

function greet() {
    let hello="hey"
    function talk() {
        let greeting="hello there"
        console.log(`${hello} ${greeting}`)
    }
    talk()
    
}
greet()