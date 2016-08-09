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


matches.forEach(function(element) {
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Winner Function
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    function win(element) {
        element.luck++;
        if (!element.isVillain) {
            heroWins++;
        } else {
            capitolWins++;
        }
    }


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Loser Function
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    function lose(element) {
        element.luck--;
        if (element.isVillain) {
            heroWins--;
        } else {
            capitolWins--;
        }
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Luck Function
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
            !element.isAlive;
        }
    }


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
