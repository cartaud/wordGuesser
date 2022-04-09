
let count = document.querySelector('#time');
let remaining = document.querySelector('#remaining');
let message = document.querySelector('#message');
let wordDisp = document.querySelector('#wordWrap')
let win = document.querySelector('#win')
let loss = document.querySelector('#loss')

let wins = localStorage.getItem('wins') || 0;
let losses = localStorage.getItem('losses') || 0;

win.textContent = wins;
loss.textContent = losses;

function generateWord() {
    
    wordDisp.innerHTML = '';
    
    let wordArr = ['anxiously', 'breakdown', 'cylinders', 'campfires', 'hangover', 'keyboard', 'merchant', 'randomize', 'ownership', 'uploading'];
    let rand = Math.floor(Math.random()*wordArr.length);
    let word = wordArr[rand];
    
    /* creates an underline html tag and appends it to #wordWrap and then creates
    a span element that contains a single character from a random word of wordArr and then appends
    each span element into an individual underline tag*/ 
    //works ok but could be better by making each underline the same length (come back for later)
    for (let i=0; i<word.length;i++){
        let underline = document.createElement('u');
        let span = document.createElement('span');
        span.setAttribute('class','letter');
        span.textContent = word[i];
        span.style.color = 'transparent'
        wordDisp.append(underline);
        underline.append(span)
    }
    
    /*checks to see if a key the user presses is in the random word and
    if it is it makes that character visible*/ 
    let letters = document.querySelectorAll('.letter')
    let underlines = document.querySelectorAll('u');
    countDown(word, letters);
    window.addEventListener('keydown', function(event) {
        let x = event.key;
        if (word.includes(x)) {
            let position1 = word.indexOf(x);
            letters[position1].style.color = 'black';
            underlines[position1].style.borderBottom = 'none';
            //I could add anther if here checking word.includes(x, position1 +1) but it gives errors
        }
        
    })
}

function countDown(word, letters) {
    
    let time = 10;
    let timeInterval = setInterval(function() {
        
    //this below will never run. FIX when u come back!
    if (time>1) {
        count.textContent = time; 
        remaining.textContent = 'seconds remaining';
        time--;
        checkComplete(word, letters, timeInterval)
    }
    else if (time == 1) {
        count.textContent = time;
        remaining.textContent = 'second remaining'; 
        time--;  
        checkComplete(word, letters, timeInterval);
    }
    else {
        count.textContent = time; 
        remaining.textContent = 'seconds remaining';
        clearInterval(timeInterval);
        losses++;
        localStorage.setItem('losses', losses);
        loss.textContent = losses
        gameOver(word, 1);
    }

    }, 1000)
}

function checkComplete(word, letters, timeInterval) {
     //will check if all characters in word are visible 
    let j=0;
    for (let i=0;i<word.length;i++) {
        if (letters[i].style.color == 'black') {
            j++
            if (j==word.length) {
                clearInterval(timeInterval);
                wins++;
                localStorage.setItem('wins', wins);
                win.textContent = wins;
                gameOver();
            }
        }
          
         
     }
}

function gameOver(word, x) {
    if (x==1) {
        message.textContent = `You lost! The word was ${word}`
    }
    else {
        message.textContent = '';
    }
    generateWord()
}

function resetScore() {
    wins = 0;
    losses = 0;
    localStorage.setItem('wins', wins);
    localStorage.setItem('losses', losses);
    win.textContent = wins;
    loss.textContent = losses;
}