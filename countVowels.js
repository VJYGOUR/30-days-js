const countVowels=(str)=>{
    //create a vowel string
    let vowel='aeiouAEIOU';
    let count=0;
    for(let i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
            count++
        }
    }
    return count;
}
const res=countVowels('raamiup');
console.log(res)