const owners = ['Akhilesh','Gowda','cassie','rambo','doll'];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(owners.sort());
//ascending order
movements.sort((a,b)=>{
    if(a>b)
    return 1;
    if(b>a)
    return -1;
});

console.log(movements);
//Alternatively
movements.sort((a,b)=>a-b);
console.log(movements);

//descending order
movements.sort((a,b)=>{
    if(a>b)
    return -1;
    if(b>a)
    return 1;
});
console.log(movements);