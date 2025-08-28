const firstChUpper=(arr)=>{
return arr.map((curr)=>{
    return curr.charAt(0).toUpperCase() + curr.slice(1)
})
}
console.log(firstChUpper(['apple','banana','orange']))