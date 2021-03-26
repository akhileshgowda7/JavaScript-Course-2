'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore =0;


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'NO Number!';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.Number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor =  '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        
    }else if(guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }else if(guess < secretNumber){
        if(score>1){
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = 'Start Guessing...';
    }
    }

    
});
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor =  '#222';
    document.querySelector('.number').style.width = '15rem';
});