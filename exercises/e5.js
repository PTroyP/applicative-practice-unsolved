import { data } from '../data/data';

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  if (number >= 1 && number <= 7) {
    var number = number;
  }

  var highMassValuePlanets = data.planets.filter(function (planet) {
    if (planet.mass.massValue >= number) {
      return planet;
    }
  });

  var highMassValueNames = highMassValuePlanets.map(function (planetName) {
    return planetName.name;
  });
  return highMassValueNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
