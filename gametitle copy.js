// Take the game title and store each character in the title in its own h1 element.
var gameTitle = 'PARAPHASIA';
var i = 0, intervalID;

intervalID = window.setInterval (function() {
    var titleElement = document.createElement('h1');
    titleElement.innerText += gameTitle.charAt(i++);
    document.getElementById('header').appendChild(titleElement);
        if (i >= gameTitle.length)
            window.clearInterval(intervalID);
}, 500);

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


setInterval(() => {
    
}, 100);

console.log(randomAlpha());
let randomNum = Math.floor(Math.random()*Math.floor(26));
console.log(randomNum);

// Get the children h1 elements from subcontainer and fill them with the individual letters from the title PARAPHASIA.

const titleArray = 'PARAPHASIA'.split("");

var subcontainer = document.getElementById('subcontainer');

var titleFunc = (sub) => {
    var subChildren = sub.children;
    for (let i = 0; i < subChildren.length; i++) {
        subChildren[i].innerText = titleArray[i];
    }
}

console.log(subcontainer);
titleFunc(subcontainer);



// var testTitle = 'PARAPHASIA';
// var x = 0, testID;

// testID = window.setInterval (function() {
//     var miniEl = document.createElement('h1');
//     miniEl.innerText += testTitle.charAt(x++);
//     document.getElementById('test').appendChild(miniEl);
//     if (x >= testTitle.length)
//         window.clearInterval(testID);
// }, 500);


// document.getElementById('test').appendChild(testEl);


// Original code that worked for displaying PARAPHASIA one letter at a time.

// var testTitle = 'PARAPHASIA';
// var i = 0, intervalID;
// intervalID = window.setInterval (function() {
//     gameTitleEl.innerText += testTitle.charAt(i++);
//         if (i > testTitle.length)
//             window.clearInterval(intervalID);
// }, 750);

