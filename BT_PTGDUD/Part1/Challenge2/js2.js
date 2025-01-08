// Data 1
let markMass1 = 78; // Mark's mass in kg
let markHeight1 = 1.69; // Mark's height in meters
let johnMass1 = 92; // John's mass in kg
let johnHeight1 = 1.95; // John's height in meters

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Function to calculate BMI
function calculateBMI(mass, height) {
  return mass / height ** 2;
}

// Calculate BMIs for Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Determine higher BMI for Data 1
if (markBMI1 > johnBMI1) {
  console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
}

// Calculate BMIs for Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Determine higher BMI for Data 2
if (markBMI2 > johnBMI2) {
  console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
}

