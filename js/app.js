'use strict';

var guestName = prompt('what is your name?');
alert('Hello there ' + guestName + ' it is really nice to meet you!');

var totalPoints = 0;

function questionA() {
    var nickName = prompt('Do you think I have a nickname? yes or no');
    var nickNameAnswer = nickName.toLowerCase();
    console.log(nickNameAnswer)
    if (nickNameAnswer === 'yes' || nickNameAnswer === 'y') {
        alert('That is correct. My nickname is D');
        totalPoints++;
    }
    else {
        alert('sorry that is incorrect. try again');
        questionA();
    }
}
questionA();

function questionB() {
    var color = prompt('Do you think I like red color over blue? yes or no');
    var guessedColor = color.toUpperCase();
    console.log(guessedColor)
    if (guessedColor === 'YES' || guessedColor === 'Y' || guessedColor === 'yes') {
        alert('that is correct I love the color red');
        totalPoints++;
    }
    else {
        alert('sorry try again');
        questionB();
    }
}
questionB();

function questionC() {
    var game = prompt('Is it true that I like football better than basketball? yes or no');
    var gameDay = game.toUpperCase();
    console.log(gameDay)
    if (gameDay === 'YES' || gameDay === 'Y') {
        alert('that is correct football is awesome');
        totalPoints++;
    }
    else {
        alert('sorry thats incorrect. try again');
        questionC();
    }
}
questionC();

function questionD() {
    var height = prompt('Do you think I am 5 feet 6 inches tall? yes or no');
    var guessedHeight = height.toUpperCase();
    console.log(guessedHeight)
    if (guessedHeight === 'NO' || guessedHeight === 'N') {
        alert('That is correct. I am 5 feet 11 and half inches');
        totalPoints++;
    }
    else {
        alert('sorry try again');
        questionD();
    }
}
questionD();

function questionE() {
    var birthLocation = prompt('Was I born on the plane? yes or no');
    var birthPlace = birthLocation.toLowerCase();
    console.log(birthPlace)
    if (birthPlace === 'no' || birthPlace === 'n') {
        alert('That is correct, I was born in the hospital like most of you!')
        totalPoints++;
    }
    else {
        alert('Sorry that is incorrect, please try again.');
        questionE();
    }
}
questionE();

function questionF() {

    var allowedGuesses = 4;

    while (allowedGuesses > 0) {
        var correctGuesses = prompt('How many cars do you think I have?');

        if (correctGuesses === '5') {
            alert('That is correct.');
            totalPoints++;
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

function questionG() {

    var drinks = ['water', 'apple Juice', 'orange juice', 'beer', 'vodka', 'coke', 'milk'];
    var mainQuestion = prompt('What do you think my favorite drinks are?');
    var allowwedAttemptsLeft = 6;
    var rightAnswers = false;

    while (allowwedAttemptsLeft > 0 && !rightAnswers) {
        allowwedAttemptsLeft--;
        for (var i = 0; i < drinks.length; i++) {
            if (mainQuestion === drinks[i]) {
                rightAnswers = true;
                alert(`My favorite drink is ${mainQuestion}`);
                totalPoints++;
            }
        }
        if (allowwedAttemptsLeft > 0 && !rightAnswers) {
            mainQuestion = prompt('Sorry that is incorrect please try again.')
        }
        if (allowwedAttemptsLeft === 0 && !rightAnswers) {
            alert('Sorry you did not guess the right answer within 6 attempts.')
        }
    }
}
questionG();

alert(`Your result! You answered ${totalPoints}` + ` correctly.`)

alert('Thank you for participating in my About me game ' + guestName + '.' + ' I hope you got to know me a bit and until next time take good care of yourself.');

