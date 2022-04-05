let wordArr = ['word'];
let rand = Math.floor(Math.random()*wordArr.length);
console.log(wordArr[rand]);

let count = document.querySelector('#time');
let remaining = document.querySelector('#remaining');
let message = document.querySelector('#message');

function countDown() {
    message.textContent = '';
    let time = 5;
     let timeInterval = setInterval(function() {
        if (time>1) {
            count.textContent = time; 
            remaining.textContent = 'seconds remaining';
            time--;
        }
        else if (time == 1) {
            count.textContent = time;
            remaining.textContent = 'second remaining'; 
            time--;  
        }
        
        else {
            count.textContent = time; 
            remaining.textContent = 'seconds remaining';
            clearInterval(timeInterval);
            gameOver();
        }
    
    }, 1000)
}

function gameOver() {
    message.textContent = 'GAME OVER'
}
