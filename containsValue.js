const containsValue=(arr,value)=>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
        return`${value} value exist `
        }
     
    }return `${value} value not found`
}
console.log(containsValue([1,2,3,4,5,6,7,8],6))