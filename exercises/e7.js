import { data } from '../data/data';

// SPACE DATA EXERCISE 7
// Return an array of all Planets names that have moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsNamesWithMoons(data) {
  // Your code goes here...
  var planetsWithMoons = data.planets.filter(function (planet) {
    return planet.moons;
  });

  var planetNamesWithMoons = planetsWithMoons.map(function (planet) {
    return planet.name;
  });

  return planetNamesWithMoons;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
