// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
export const drawTriangle = (length = 5) => {
  for (let i = 1; i <= length; i++) {
    console.log('* '.repeat(i).trim())
  }
  console.log('\n')
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
export const drawJavascriptWord = (word = "javascript") => {
  for (let i = 0; i < word.length; i++) {
    console.log('* '.repeat(word.length - i - 1) + word.substring(word.length - i - 1).toUpperCase().split('').join(' '))
  }
  console.log('\n')
};


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
export const getVehiclesAndTopSpeed = (vehicles) => {
  return vehicles.map(vehicle => ({
    name: vehicle.name,
    topSpeed: Math.max(...vehicle.measuredSpeeds)
  }))
};

console.log('drawTriangle')
drawTriangle(); // It will draw a triangle of 5 lines

console.log('drawJavascriptWord')
drawJavascriptWord(); // It will draw the specified pattern with the word "javascript"

const vehicles = [
  { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
  { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
  { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
];

console.log('getVehiclesAndTopSpeed')
const vehiclesTopSpeed = getVehiclesAndTopSpeed(vehicles);
vehiclesTopSpeed.forEach(vehicle => console.log(vehicle));