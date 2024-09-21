'use strict';

// const math = require('mathjs');

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = '?';

document.querySelector(".check").addEventListener('click',function(){
    
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No Number!';
    
    }else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector(".message").textContent = "🎉 Correct Number!" ; 
        document.querySelector('body').style.backgroundColor = '#00CC66';  
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    
    }else if(guess > secretNumber){
        
        if(score > 0){
            document.querySelector(".message").textContent = " 📈 Number is too big!" ;
            score--;
            document.querySelector(".score").textContent = score;
        
        }else{
            document.querySelector('.message').textContent = '🙃 Oops you lost the game!'
            document.querySelector(".score").textContent = 0;
        }
       
    }else if(guess < secretNumber){
        
        if(score>0){
            document.querySelector(".message").textContent = " 📉 Number is too small!" ;
            score--;
            document.querySelector(".score").textContent = score;
    
        }else{
        document.querySelector('.message').textContent = '🙃 Oops you lost the game!'
        document.querySelector(".score").textContent = 0;
    }}
});

document.querySelector('.again').addEventListener('click',function(){
      score = 20;
      secretNumber = Math.trunc(Math.random()*20)+1;
      document.querySelector('.number').textContent = '?';
      document.querySelector(".score").textContent = score;
      document.querySelector('.message').textContent = 'Start guessing...'
      document.querySelector('body').style.backgroundColor = '#222'; 
      document.querySelector('.guess').value = '';

});
