let sucess=true;
let promise=new Promise((resolve,reject)=>{
    if (sucess) {
        setTimeout(()=>resolve("I succeeded"),5000)
        
    }
    else{
        setTimeout(()=>reject("i am still looking for a job"),5000)
        
    }

 })
// .then(()=>{console.log("i will work hard")})
//    .catch(()=>{console.log("take more time to upskill")})
//    .finally(()=>{console.log("I am still worthy")})
// console.log((promise))   

async function student() {
    let result=await promise;
    console.log(result);
}
student()



