// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const lufthansa = {
    airline:'Lufthansa',
    iataCode: 'LH',
    bookings:[],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
    }

}

lufthansa.book(456,'Akhilesh Gowda');
lufthansa.book(785,'Nanjesh Gowda');


const eurowing= {
    name:'Eurowings',
    itacode:'EW',
    bookings:[],
};
const book=lufthansa.book;

book.call(eurowing,34,'pep Guardiola');
console.log(eurowing);
book.call(lufthansa,564,'mary Guardiola');


const swiss = {
    airline:'Swiss Air Lines',
    itacode:'LX',
    bookings:[],
};


book.call(swiss,583,'Mary Jane');
//Apply Method
const flightData = [583,'Anne Jane'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss,...flightData);

//bind method
const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23,'steven williams');

const bookEW23=book.bind(eurowing,23);
bookEW('Akhilesh Gowda');