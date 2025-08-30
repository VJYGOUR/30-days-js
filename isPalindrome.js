const isPalindrome = (str) => {
    // Convert string to array, reverse it, then join back to string
    let reverseStr = str.split('').reverse().join('');
    
    if (reverseStr === str) {
        return `${str} is a palindrome`;
    }
    return `${str} is not a palindrome`;
}

const result = isPalindrome('madam');
console.log(result); // Output: "raam is not a palindrome"