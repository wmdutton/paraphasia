// Create a function that inserts the game title into an h1 element.

var intervalID = 0;
function createTitle()
{
    intervalID = setInterval(letter, 500);
    document.getElementById('header').appendChild(titleElement);
}

function letter()
{
    var titleElement = document.createElement('h1');
    var gameTitle = 'PARAPHASIA';
    var i = 0;
    if (i < gameTitle.length)
    {
        console.log(gameTitle[i]);
        titleElement.innerText = gameTitle[i];
        i++;
    }
    else
    {
        clearInterval(intervalID);
    }
}

createTitle();