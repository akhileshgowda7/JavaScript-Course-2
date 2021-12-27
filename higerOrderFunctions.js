const oneWord = function(str){
return str.replace(/ /g,'');
};

const upperFirstWord=function(str){
    const [first,...others]=str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');

};
// higher order function
const transformer = function(str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed String:${fn(str)}`);
    console.log(`transformed by ${fn.name}`);
}

transformer('JavaScript is the best',upperFirstWord);
