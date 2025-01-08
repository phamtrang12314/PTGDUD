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

// Calculating BMIs for Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Boolean for Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`Data 1:`);
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI1}`);

// Calculating BMIs for Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Boolean for Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`\nData 2:`);
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI2}`);
