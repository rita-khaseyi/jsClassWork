let a="10";
//implicit coersion
let b= a*10;
console.log(b);
console.log(typeof (b))
console.log(a*1)
console.log(+a)
console.log(typeof(+a))

//explicit coersion
//use js methods
let c=Number(a);
console.log("c", typeof(c));
let d =String(c);
console.log("d",typeof(d));
let e = new Array(d);
console.log(e)
