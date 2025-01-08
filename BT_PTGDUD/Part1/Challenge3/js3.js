// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Data Bonus 2
const dolphinsScores3 = [97, 112, 101]; // Fixed typo here
const koalasScores3 = [109, 95, 106];

// Function to calculate average score
const calculateAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

// Calculate average scores
const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);

const dolphinsAvg2 = calculateAverage(dolphinsScores2);
const koalasAvg2 = calculateAverage(koalasScores2);

const dolphinsAvg3 = calculateAverage(dolphinsScores3); // Fixed typo here
const koalasAvg3 = calculateAverage(koalasScores3);

// Minimum score to win
const minimumScore = 100;

// Compare scores and determine the winner
if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 >= minimumScore) {
    console.log(`Dolphins1 chiến thắng với số điểm trung bình là ${dolphinsAvg1.toFixed(1)}!`);
} else if (koalasAvg1 > dolphinsAvg1 && koalasAvg1 >= minimumScore) {
    console.log(`Koalas1 chiến thắng với số điểm trung bình là ${koalasAvg1.toFixed(1)}!`);
} else if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= minimumScore && koalasAvg1 >= minimumScore) {
    console.log(`Hòa! Cả hai đội đều đạt điểm trung bình là ${dolphinsAvg1.toFixed(1)}.`);
} else {
    console.log(`Không có đội nào chiến thắng vì điểm trung bình không vượt quá ${minimumScore}.`);
}

if (dolphinsAvg2 > koalasAvg2 && dolphinsAvg2 >= minimumScore) {
    console.log(`Dolphins2 chiến thắng với số điểm trung bình là ${dolphinsAvg2.toFixed(1)}!`);
} else if (koalasAvg2 > dolphinsAvg2 && koalasAvg2 >= minimumScore) {
    console.log(`Koalas2 chiến thắng với số điểm trung bình là ${koalasAvg2.toFixed(1)}!`);
} else if (dolphinsAvg2 === koalasAvg2 && dolphinsAvg2 >= minimumScore && koalasAvg2 >= minimumScore) {
    console.log(`Hòa! Cả hai đội đều đạt điểm trung bình là ${dolphinsAvg2.toFixed(1)}.`);
} else {
    console.log(`Không có đội nào chiến thắng vì điểm trung bình không vượt quá ${minimumScore}.`);
}

if (dolphinsAvg3 > koalasAvg3 && dolphinsAvg3 >= minimumScore) {
    console.log(`Dolphins3 chiến thắng với số điểm trung bình là ${dolphinsAvg3.toFixed(1)}!`);
} else if (koalasAvg3 > dolphinsAvg3 && koalasAvg3 >= minimumScore) {
    console.log(`Koalas3 chiến thắng với số điểm trung bình là ${koalasAvg3.toFixed(1)}!`);
} else if (dolphinsAvg3 === koalasAvg3 && dolphinsAvg3 >= minimumScore && koalasAvg3 >= minimumScore) {
    console.log(`Hòa! Cả hai đội đều đạt điểm trung bình là ${dolphinsAvg3.toFixed(1)}.`);
} else {
    console.log(`Không có đội nào chiến thắng vì điểm trung bình không vượt quá ${minimumScore}.`);
}