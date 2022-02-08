'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const displayMovements = function(movements, sort=false){
  containerMovements.innerHTML='';

  const movs= sort ? movements.slice().sort((a,b)=> a-b):movements;

  movs.forEach(function(mov,i){
    const type = mov>0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
  containerMovements.insertAdjacentHTML('afterbegin',html);
  });
};
displayMovements(account1.movements);

const CreateUsernames = function(accs){//stw
  accs.forEach(function(acc){
    acc.username=acc.owner.toLowerCase().split(' ').map(function(name){
      return name[0];
    }).join('');
  })
};
CreateUsernames(accounts);
// console.log(accounts)
const deposits = movements.filter(function(mov){
  return mov > 0 ;
})


// console.log(deposits);

const withdrawals = movements.filter(function(mov){
  return mov<0;
})
// console.log(withdrawals);
//accumulator is like a snowball
//reduce has a second argument which is the initial value of the accumulator.


const calcDisplayBalance = function(acc){
   acc.balance = acc.movements.reduce(function(acc,cur,i,arr){
    return acc + cur ;
  },0)
  
  // console.log(balance);
  labelBalance.textContent=`${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);
// to find maximum element in movement



const max = movements.reduce((acc,mov)=>{
  if(acc>mov)return acc;
  else return mov;

},movements[0]);
console.log(max);


const eurToUsd = 1.1;
//piplining
const totalDepositUSD= movements.filter(mov=>mov>0).map(mov=>mov*eurToUsd).reduce((acc,mov)=>acc+mov,0);
// console.log(totalDepositUSD);

const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  // console.log(incomes);
  // console.log("hey");
  labelSumIn.textContent=`${incomes}€`;

  const out = acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
  // console.log(out);
  labelSumOut.textContent=`${Math.abs(out)}€`;

  const interest=acc.movements.filter(mov=>mov>0).map(deposit=>(deposit*acc.interestRate)/100).filter((int,i,arr)=>int>=1).reduce((acc,mov)=>acc+mov,0);

  labelSumInterest.textContent=`${interest}€`;
};
// calcDisplaySummary(account1.movements);

const updateUI = function(acc){
  displayMovements(currentAccount.movements)

calcDisplayBalance(currentAccount)

calcDisplaySummary(currentAccount)
}

let currentAccount;
btnLogin.addEventListener('click',function(e){
//preventing form from submiting
e.preventDefault();
currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
console.log(currentAccount);
if(currentAccount?.pin===Number(inputLoginPin.value)){
labelWelcome.textContent=`Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
containerApp.style.opacity=100;

inputLoginUsername.value = inputLoginPin.value='';

inputLoginPin.blur()
// displayMovements(currentAccount.movements)

// calcDisplayBalance(currentAccount)

// calcDisplaySummary(currentAccount)
updateUI(currentAccount)

}
});

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc=>acc.username===inputTransferTo.value);

// inputTransferAmount.value = inputTransferTo.value = '';


  if(amount>0 && receiverAcc && currentAccount.balance>=amount && receiverAcc.username!==currentAccount.username){
currentAccount.movements.push(-amount);
receiverAcc.movements.push(amount);

updateUI(currentAccount);
  }
})

btnClose.addEventListener('click',function(e){

  e.preventDefault();
  if(inputCloseUsername.value===currentAccount.username && Number(inputClosePin.value)===currentAccount.pin){

    const index = accounts.findIndex(acc=>acc.username===currentAccount.username)
    //Deleting the account
    accounts.splice(index,1);

    //hiding the user interface
    containerApp.style.opacity=0;

  }
  inputTransferAmount.value = inputTransferTo.value = '';
})

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
    //add movement
    currentAccount.movements.push(amount);

    //updating user interface

    updateUI(currentAccount)
  }
  inputLoanAmount.value='';
})

let sorted=false;

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;
});
