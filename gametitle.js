// Basic ARRAYS
const titleArray = 'PARAPHASIA'.split("");
const alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

// Basic FUNCTIONS

// getRandomInt:
//  Function for random numbers. The maximum is exclusive and the minimum is inclusive.

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min; 
}

// getRandomLetters:
// Function is used to generate an array with random letters in it that do not repeat in a row with the desired minimum and maximum length of array (maximum is not included).

function getRandomLetters (minChars, maxChars) {
    let letterArray = [];
    let numLetters = getRandomInt(minChars, maxChars);
    for (let i = 0; i < numLetters; i++) {
        let randLetter = getRandomInt(0, alphabetArray.length);
        letterArray.push(alphabetArray[randLetter]);
        if (letterArray[i] === letterArray[i-1]) {
            letterArray[i] = alphabetArray[randLetter-1];
        }
    }
    return letterArray;
};

setInterval(() => {
    
}, 1000);

let testCycle = getRandomLetters(2,5);
console.log(testCycle);

// const timeoutTest = setTimeout(console.log(testCycle[0]), 2000);


// Setting the const btnStart to attach to a button and btnStop to stop the code (for testing).
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
let intervalID;
let timeoutID;

// Adding the "click" event listener to set an Interval for cycling through a variable assigned to getRandomLetters.
btnStart.addEventListener('click', function() {
    intervalID = setInterval (function () {
        console.log(intervalID);
        let i = 0;
        while (i < testCycle.length) {
            timeoutID = setTimeout(console.log(testCycle[i]), 1500);
            i++;
        };  
    }, 1500);
});

btnStop.addEventListener('click', function() {
    clearInterval(intervalID);
});

// cycleLetters:
// This function will loop through an array of letters from getRandomLetters.



// let newLetterArray = getRandomLetters(minChars, maxChars);
    // let arrayLength = newLetterArray.length;
    // console.log(newLetterArray);
    // console.log(arrayLength);
    // for (let i = 0; i < arrayLength; i++) {
        
    // }


// cycleLetters(1,20);


// Create an array with the full alphabet in it. Create a function that runs through random letters of the array and stores which ones it grab.

var randomAlpha = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let cycleLetters = Math.floor(Math.random()*Math.floor(100));
    let usedLetters = [];
    for (let i=0; i < cycleLetters; i++) {
        let randomChar = Math.floor(Math.random()* alphabet.length);
        usedLetters.push(alphabet[randomChar]);
    }
    return usedLetters;
}


// Get the children h1 elements from subcontainer and fill them with the individual letters from the title PARAPHASIA.

var subcontainer = document.getElementById('subcontainer');

var titleFunc = (sub) => {
    var subChildren = sub.children;
    for (let i = 0; i < subChildren.length; i++) {
        subChildren[i].innerText = titleArray[i];
        
    }
}

console.log(subcontainer);
titleFunc(subcontainer);