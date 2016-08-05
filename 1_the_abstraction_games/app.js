// Practice abstraction.
// https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)

/**
 * 1. Create a Person constructor with the following object properties:
 * firstName
 * lastName
 * district
 * weapon
 * luck
 * matches
 * wins
 */

/**
 * 2. Create person objects for Katniss, Rue, Peeta, and Gale with the
 * following values:
 * Katniss, Everdeen, 12, bow and arrow, 10, 0, 0
 * Peeta, Mellark, 12, camoflague, 5, 0, 0
 * Rue, null, 11, slingshot, 4, 0, 0
 * Thresh, null, 11, rock, 3, 0, 0
 */

// katniss

// peeta

// rue

// thresh

/**
  * 3. Create 4 arrays that represent matches between two characters.
  * For example, you might have an array named match1 where the first index
  * of the array is the Katniss object and the second index is the Thresh object.
  */

// match1

// match2

// match3

// match4

/**
  * 4. Create an array, named matches. It will contain all the matches you
  * created above.
  */

/**
  * 5. Create a function, named winner, that takes a single person object as
  * a parameter. The function will
  * - increment the winner's luck score by 1
  * - increment the winner's wins property by 1
  * BUT, the max luck score is 10.
  */

/**
  * 6. Create a function, named battle, that takes a single match array as a
  * parameter.
  * The function will
  * - increment the matches property of each object
  * - return the winner of the match
  * The winner is the person with the highest luck score.
  */

/**
  * 7. Create a function, named runAllBattles, that takes an array of matches
  * as a parameter.
  * For each match array, invoke the battle function.
  * Pass the result of the battle function to the winner function.
  * Console log each person object after all battles have been completed.
  */

/**
  * 8. Invoke the battle function with one of the matches you created above.
  * Pass the result of the battle function to the winner function.
  * Console log each person object.
  */

  /**
   * TAKEAWAYS
   * When we abstract our logic into functions, we can perform those functions
   * on one or more objects or arrays. This gives us more flexibility and
   * allows us to not repeat the same code in multiple places (DRY).
   */
