let sucess=true;
let promise=new Promise((resolve,reject)=>{
    if (sucess) {
        resolve("I succeeded")
    }
    else{
        reject("i am still looking for a job")
    }

}).then(()=>{console.log("i will work hard")})
   .catch(()=>{console.log("take more time to upskill")})
   .finally(()=>{console.log("I am still worthy")})
console.log((promise))   



