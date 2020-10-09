'use strict';

var guestName = prompt('what is your name?');
//console.log('Hello there' + guestName + 'it is really nice to meet you!');
alert('Hello there ' + guestName + ' it is really nice to meet you!');

function questionA() {
    var nickName = prompt('Do you think I have a nickname? yes or no');
    var nickNameAnswer = nickName.toLowerCase();
    if (nickNameAnswer === 'yes' || 'y') {
        nickName = prompt('That is correct. My nickname is D');
        //how do I put a stop to the code if the right answer has been submitted.
        if (nickNameAnswer === 'no' || 'N' || 'n') {
            nickName = prompt('sorry that is incorrect. try again');
        }
    }

}

questionA();

function questionB() {
    var color = prompt('Do you think I like red color over blue? yes or no');
    var guessedColor = color.toUpperCase();
    if (guessedColor === 'yes' || 'Y') {
        color = prompt('that is correct I love the color red');
        if (guessedColor === 'no' || 'n' || 'N') {
            color = prompt('sorry try again');
        }
    }
}

questionB();


function questionC() {
    var game = prompt('Is it true that I like football better than basketball? yes or no');
    var gameDay = game.toUpperCase();
    if (gameDay === 'yes' || 'Y') {
        game = prompt('that is correct football is awesome');
        if (gameDay === 'no' || 'n' || 'N') {
            game = prompt('sorry thats incorrect. try again');
        }
    }
}
questionC();

function questionD() {
    //the best one so far
    var height = prompt('Do you think I am 5 feet 6 inches tall? yes or no');
    var guessedHeight = height.toUpperCase();
    if (height === 'yes' || 'Y' || 'y') {
        height = prompt('sorry try again');
        if (height === 'no' || 'N') {
            height = prompt('That is correct. I am 5 feet 11 and half inches');
        }
    }
}
questionD();

function questionE() {
    var birthLocation = prompt('Was I born on the plane? yes or no');
    var birthPlace = birthLocation.toLowerCase();
    if (birthLocation === 'yes') {
        birthLocation = prompt('Sorry that is incorrect. I was born in the hospital like most of us');
        if (birthLocation = 'no') {
            birthLocation = prompt('That is correct.');
            alert('Thank you for playing my About me game' + guestName + '.' + 'I hope you got to know me a bit.' + 'until next time take good care of yourself.');
        }
    }
}
questionE();


// Not using this
// for (var i = 0; i < 4; i++) {}

// question# 6


// var i = 0;
// var allowedGuesses = 4;
// var correctGuesses = false;

// while (i < 3 && !correctGuesses) {
//     i++;
//     var guess = prompt('How many cars do you think I have?');
//     console.log(typeof guess, guess);
//     if (guess > allowedGuesses) {
//         alert('That is too high. Please try again.');
//     } else if (guess < allowedGuesses) {
//         alert('That is too low. Please try again.');
//     } else if (guess === 4) {
//         alert('That is correct.');
//         correctGuesses = true;
//         break
//     }

//     if (!correctGuesses) {
//         alert('Sorry you have no more tries left. The correct answer is 4.');
//     }

function questionF() {

    var allowedGuesses = 4;

    while (allowedGuesses > 0) {
        var correctGuesses = prompt('How many cars do you think I have?');

        if (correctGuesses === '5') {
            alert('That is correct.');
            break;
        }
        if (allowedGuesses === 1) {
            alert('No more attempt left. The correct answer is 5.');
        }
        if (correctGuesses > '5' && allowedGuesses > 1) {
            alert(`That's too high, Please try again. ${allowedGuesses - 1} attempt(s) remaining.`);
        }
        if (correctGuesses < '5' && allowedGuesses > 1) {
            alert(`That's too low, please try again. ${allowedGuesses - 1} attempt(s) remainig.`);
        }
        allowedGuesses--;
    }
}
questionF();

// question # 7

//var drinks = ['Water', 'Apple Juice', 'Orange Juice', 'Beer', 'Vodka', 'Coke', 'Milk']

// for (var i = 0; i < 6; i++)

// var rightAnswers = ['Water', 'Milk', 'Coke'];
// var mainQuestion = prompt('What do you think my favorite drinks are?');
// //var allowwedAttempts = 6;


//     if (mainQuestion !== rightAnswers)[i];{
//         alert('That is incorrect answer. Please try again.');
//     } 
//     else if (mainQuestion === rightAnswers[0]){
//         alert('Correct. That is the right answer.');
//         break;
//     }
//     else if (mainQuestion === rightAnswers[1]){
//         alert('Correct. That is the right answer.');
//         break;
//     }
//     else if (mainQuestion === rightAnswers[2]){
//         alert('Correct. That is the right answer.');
//         break
//     }





//this is not needed for now 
//alert(`Hi $(guestName), this is template literal!`);