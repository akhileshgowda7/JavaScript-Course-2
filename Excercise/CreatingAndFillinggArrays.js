console.log([1,2,3,4,5,6,7,8]);
console.log(new Array(1,2,3,4,5,6,7,8));

const x = new Array(1,2,3,4,5,6,7,8);
console.log(x);

// x.fill(1);
//fill will mutate the original array
x.fill(1,3,5);//Starts filling from index 3 not gonna include 5
console.log(x);

// Array.from method
const y = Array.from({length:7},()=>1);
console.log(y);

const z = Array.from({length:7},(_,i)=>i+1);
console.log(z);