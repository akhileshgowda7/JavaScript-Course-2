const movements =[200,450,-400,3000,-650,-130,70,300];

for(const movement of movements){
    if(movement>0){
        console.log(`You deposited ${movement}`);

    }else{
        console.log(`you withdrew ${Math.abs(movement)}`);
    }
}

//implimenting foreach
movements.forEach(function(movement){
    if(movement>0){
        console.log(`You deposited ${movement}`);

    }else{
        console.log(`you withdrew ${Math.abs(movement)}`);
    }
})