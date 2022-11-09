'use strict';
const scorePlayer1=document.querySelector('.ply1');
const scorePlayer2=document.querySelector('.ply2');
const btnPlayer1=document.querySelector('#btn1');
const btnPlayer2=document.querySelector('#btn2');
const reset=document.querySelector('.reset');


const targetValue=20;
let currScorePlayer1=0;
let currScorePlayer2=0;
let flag=1;


reset.addEventListener('click', function(){
    //reseting all the values.
    currScorePlayer1=0;
    currScorePlayer2=0;
    //scorePlayer1 and scorePlayer2 are the scores will be displayed on the screen. 
    scorePlayer1.textContent=0;
    scorePlayer2.textContent=0;
    flag=1;
});

btnPlayer1.addEventListener('click',function(){
    if (!flag){
        alert("WRONG PLAYER");
        return;
    }
    flag=0;
    currScorePlayer1 += Math.trunc(Math.random()*10)+1;   //getting random values.
    scorePlayer1.textContent=currScorePlayer1;   //updating the text content of DOM element.
    if (currScorePlayer1>=targetValue){
        alert(`Player 1 won with a score of ${currScorePlayer1}`);
    }
});


btnPlayer2.addEventListener('click',function(){
    if (flag){
        alert("WRONG PLAYER");
        return;
    }
    flag=1;
    currScorePlayer2 += Math.trunc(Math.random()*10)+1;
    scorePlayer2.textContent=currScorePlayer2; 
    if (currScorePlayer2>=targetValue){
        alert(`Player 2 won with a score of ${currScorePlayer2}`);
    } 
});
