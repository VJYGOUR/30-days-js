const countOccurence=(arr,val)=>{
//1st step
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===val){
        count++;
    }
}
return count;
}
console.log(countOccurence([1,2,3,4,4,4,5],4));
