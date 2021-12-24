// program that recieves input in underscore and converts it to camelCase3


const strconvert = function(strng){
    strn = strng.split('_');
    secondWord=strn[1];
    capSecondWord=secondWord[0].toUpperCase()
    return strn[0]+capSecondWord+secondWord.slice(1);
}


console.log(strconvert('underscore_case'));
console.log(strconvert('first_name'));
console.log(strconvert('some_variable'));
console.log(strconvert('calculate_age'));
console.log(strconvert('delayed_departure'));