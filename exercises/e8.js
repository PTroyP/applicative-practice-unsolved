import { data } from '../data/data';

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...

  var planetsWithMoons = data.planets.filter(function (planet) {
    return planet.moons;
  });

  var planetWithMoonName = planetsWithMoons.filter(function (planet) {
    if (planet.moons.includes(moonName)) return planet.name;
  });

  return planetWithMoonName[0].name;
}

findPlanetNameByMoon(data, 'Triton');

// findPlanetNameByMoon(data, 'Triton');

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
