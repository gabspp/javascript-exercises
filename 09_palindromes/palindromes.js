function palindromes (str) {
    strClean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = strClean.split('').reverse().join('')
    return strClean === reversed
};
console.log(palindromes("tfeeeeft"))
// Do not edit below this line
module.exports = palindromes;
