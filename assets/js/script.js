


let count = document.querySelector('#time');
let remaining = document.querySelector('#remaining');
let message = document.querySelector('#message');
let wordDisp = document.querySelector('#wordWrap')



function generateWord() {
    countDown()
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
    console.log(letters[1])
    window.addEventListener('keydown', function(event) {
        let x = event.key;
        if (word.includes(x)) {
            let position1 = word.indexOf(x);
            letters[position1].style.color = 'black';
            if (word.includes(x)) {
                let position2 = word.indexOf(x, position1+1);
                letters[position2].style.color = 'black';
            }
        }
        
    })
    
}

function match(event) {
    console.log(event.key);
}

function countDown() {
    message.textContent = '';
    let time = 10;
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
    generateWord()
}
