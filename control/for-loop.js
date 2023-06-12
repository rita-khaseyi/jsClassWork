let num=[10,21,3,8,7,9,12];
for(let i=0;i<num.length ;i++){
    console.log(i);
   
}


for(let i=0;i<num.length ;i++){
    //console.log({"continue":i});
   if (i===3) {
    continue;
   }
   console.log({"continue":i});
}
