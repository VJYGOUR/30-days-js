function findLargest(arr){
  let largest =arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
      largest=arr[i];
    }
  }
  return largest;
}
console.log(findLargest([1,256,3,9,23,30]))