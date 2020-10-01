'use strict';

var guestName = prompt('what is your name?');
console.log('Hello there' + guestName + 'it is really nice to meet you!');
alert('Hello there ' + guestName + ' it is really nice to meet you!');

var nickName = prompt('Do you think I have a nickname? yes or no');
var nickNameAnswer = nickName.toLowerCase();
if (nickNameAnswer === 'yes' || 'y'){
    nickName = prompt('That is correct. My nickname is D');
    //how do I put a stop to the code if the right answer has been submitted.
    if (nickNameAnswer === 'no' || 'N' || 'n'){
        nickName = prompt('sorry that is incorrect. try again');
    }
}

var color = prompt('Do you think I like red color over blue? yes or no');
var guessedColor = color.toUpperCase();
if (guessedColor === 'yes' || 'Y'){
    color = prompt('that is correct I love the color red');
    if (guessedColor === 'no' || 'n' || 'N'){
        color = prompt('sorry try again');
    }
}

var game = prompt('Is it true that I like football better than basketball? yes or no');
var gameDay = game.toUpperCase();
if (gameDay === 'yes' || 'Y'){
    game = prompt('that is correct football is awesome');
    if (gameDay === 'no' || 'n' ||'N'){
        game = prompt('sorry thats incorrect. try again');{
            
        }
    }
}
//the best one so far
var height = prompt('Do you think I am 5 feet 6 inches tall? yes or no');
var guessedHeight = height.toUpperCase();
if (height === 'yes'|| 'Y'||'y'){
    height = prompt('sorry try again');
    if (height === 'no'||'N'){
        height = prompt('That is correct. I am 5 feet 11 and half inches');
    }
}
var birthLocation = prompt('Was I born on the plane? yes or no');
var birthPlace = birthLocation.toLowerCase();
if (birthLocation === 'yes'){
    birthLocation = prompt('Sorry that is incorrect. I was born in the hospital like most of us');
    if (birthLocation = 'no'){
        birthLocation= prompt('That is correct.');
        alert('Thank you for playing my About me game' + guestName + '.' + 'I hope you got to know me a bit.' + 'until next time take good care of yourself.');
    } 
}