const checkBaggage=function(items){
    const baggage=items.toLowerCase();
    if(baggage.includes('knife')||baggage.includes('gun')){
        console.log(' you are not allowed on board');

    }else{
        console.log('Welcome on board');
    }

}

checkBaggage('I have a Laptop, some food and pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');
checkBaggage('Got some snacks and a gun and a knife for protection');
