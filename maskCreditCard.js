const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length,'*');

}

console.log(maskCreditCard(475673465734657));
console.log(maskCreditCard(98847857485));
