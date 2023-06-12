// given an array of numbers search for the following and return -1 if not found else the index
function binary(arr,target){
let leftindex=0;
let rightindex=arr.length -1;
console.log("right1",leftindex)
console.log("right1",rightindex)


while(leftindex<=rightindex){
    console.log("left2",leftindex)
    console.log("left2",rightindex)
    let middle= Math.floor((leftindex+rightindex)/2);
    if (arr[middle]===target) {
        return middle;
        
    }
    else if (arr[middle]>target) {
        rightindex=middle -1
         
        
    }
    else{
        leftindex=middle+1
    }
}
return -1;

}
let num=[1,3,6,8,9,56,89]
let target=9
console.log(binary(num,target))
