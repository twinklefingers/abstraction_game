/**
 * This following code needs some abstraction.
 * It's pretty hard to follow what is going on...
 * You're our only hope!
 *
 * STRATEGY
 * - If code is repeated, make that logic into a reusable function
 * - Create functions that modify a single entity/object at a time
 * - Wherever possible, try not to rely on global variables
 * - Run your code after every change to make sure it still works
 */

function Character(name, luck, isVillain) {
    this.name = name;
    this.luck = luck;
    this.isVillain = isVillain;
    this.isAlive = true;
}

// heroes
var katniss = new Character('Katniss', 10, false);
var peeta = new Character('Peeta', 6, false);
var haymitch = new Character('Haymitch', 10, false);
var johanna = new Character('Johanna', 8, false);

// Capitol scum
var oneScum = new Character('A', 5, true);
var twoScum = new Character('B', 5, true);
var threeScum = new Character('C', 6, true);
var fourScum = new Character('D', 7, true);

var heroes = [katniss, peeta, haymitch, johanna];

console.log('Our heroes at the start', heroes);

var capitol = [oneScum, twoScum, threeScum, fourScum];

console.log('The villains at the start', capitol);

var matches = [];

var heroWins = 0; // number of times a hero has won a match
var capitolWins = 0; // number of times a capitol villain has won a match

// create 10 matches
// match a random hero with a random capitol villain
for (var i = 0; i < 10; i++) {
    var match = [];

    var hero = randomWholeNumber(0, heroes.length - 1);
    match.push(heroes[hero]);

    var villain = randomWholeNumber(0, capitol.length - 1);
    match.push(capitol[villain]);

    matches.push(match);
}

console.log('Our scheduled matches', matches);


// function battle(match) {
//     for (var i = 0; i < match.length; i++) {
//         match[i].matches++;
//     }
//     if (match[0].luck > match[1].luck) {
//         winner(match[0]);
//     } else {
//         winner(match[1]);
//     }
// }

// function battle
// function winner
// function loser
// function runAllBattles

// determine the winner and loser for each match

matches.forEach(function(element) {

    // if (element[i].isAlive) { // if both contestants alive, run the match

    //wins
    function win(element) {
        element.luck++;
        if (!element.isVillain) {
            heroWins++;
        } else {
            capitolWins++;
        }
    }





    //
    // if (element[0].luck > element[1].luck) { // if hero luck greater than villain luck
    //     heroWins++; // add a win for the heroes
    //     element[0].luck++; // increase the hero's luck
    // } else if (element[0].luck < element[1].luck) { // if hero luck less than villain luck, villain wins
    //     capitolWins++; // add a win for the capitol/villains
    //     element[1].luck++; // increase the villain's luck

    //loses
    function lose(element) {
        element.luck--;
        if (element.isVillain) {
            heroWins--;
        } else {
            capitolWins--;
        }
    }




    // element[1].luck--; // decrease the villain's luck
    // if (element[1].luck < 0) { // if the luck falls below zero, character is dead
    //     element[1].isAlive = false;
    // }
    // element[0].luck--; // decrease the hero's luck
    // if (element[0].luck < 0) { // if the luck falls below zero, character is dead
    //     element[0].isAlive = false;
    // }

    //etc
    function luckBattle(element) {
        if (element[1].luck > element[0].luck) {
            win(element[1]);
            lose(element[0]);
        } else {
            win(element[0]);
            lose(element[1]);
        }
        if (element.luck > 10) { // winner's luck cannot be above 10
            element.luck = 10;
        }
        if (element.luck <= 0) {
            element.isAlive = false;
        }
    }




    //         if (element[0].luck > 10) { // winner's luck cannot be above 10
    //             element[0].luck = 10;
    //         }
    //         if (element[1].luck > 10) { // winner's luck cannot be above 10
    //             element[1].luck = 10;
    //         }
    //
    //     } else if (!element[1].isAlive && element[0].isAlive) { // if the villain is not alive, but the hero is, automatic win for hero
    //         heroWins++; // add a win for the heroes
    //     } else if (!element[0].isAlive && element[1].isAlive) { // if the hero is not alive, but the villain is, automatic win for villain
    //         capitolWins++; // add a win for the capitol/villains
    //     }
    luckBattle(matches);
    console.log(heroWins);
    console.log(capitolWins);

});

conclusion();

// display the results of our matches in the console
function conclusion() {
    console.log('Heroes at conclusion', heroes);
    console.log('Villains at conclusion', capitol);

    if (capitolWins > heroWins) {
        console.log('Not really the ending we were hoping for');
    } else {
        console.log('We did it!');
    }
}

function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
