/**
 * This following code needs some abstraction.
 * It's pretty hard to follow what is going on...
 * You're our only hope!
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

var heroWins = 0;
var capitolWins = 0;

// create 10 matches
for (var i = 0; i < 10; i++) {
  var match = [];
  hero = randomWholeNumber(0, heroes.length - 1);
  console.log('hero selected', hero);
  match.push(heroes[hero]);

  villain = randomWholeNumber(0, capitol.length - 1);
  match.push(capitol[villain]);

  matches.push(match);
}

console.log('Our scheduled matches', matches);

matches.forEach(function (element) {

  if (element[0].isAlive && element[1].isAlive) {
    if (element[0].luck > element[1].luck) {
      heroWins++;

      element[0].luck++;
      if (element[0].luck > 10) {
        element[0].luck = 10;
      }

      element[1].luck--;
      if (element[1].luck < 0) {
        element[1].isAlive = false;
      }
    } else if (element[0].luck < element[1].luck) {
      capitolWins++;

      element[1].luck++;
      if (element[1].luck > 10) {
        element[1].luck = 10;
      }

      element[0].luck--;
      if (element[0].luck < 0) {
        element[0].isAlive = false;
      }
    }
  } else if (!element[1].isAlive && element[0].isAlive) {
    heroWins++;

    element[0].luck++;
    if (element[0].luck > 10) {
      element[0].luck = 10;
    }

    element[1].luck--;
    if (element[1].luck < 0) {
      element[1].isAlive = false;
    }
  } else if (!element[0].isAlive && element[1].isAlive) {
    capitolWins++;

    element[1].luck++;

    if (element[1].luck > 10) {
      element[1].luck = 10;
    }

    element[0].luck--;
    if (element[0].luck < 0) {
      element[0].isAlive = false;
    }
  }
});

conclusion();

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
