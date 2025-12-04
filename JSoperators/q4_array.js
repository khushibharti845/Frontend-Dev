
let scores = [];
for(let i=0; i<8; i++) {
    let randomScore = Math.floor(Math.random() * 71) + 30;
    scores.push(randomScore);
}

console.log("Student scores: " + scores);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
console.log("Highest score: " + highest);
console.log("Lowest score: " + lowest);

let total = 0;
for(let i=0; i<scores.length; i++){
    total = total + scores[i];
}
let average = total / scores.length;
console.log("Average score: " + average.toFixed(2));

let passedStudents = scores.filter(function(score){
    return score >= 50;
});
console.log("Students passed: " + passedStudents.length);

console.log("\n--- Complete Summary ---");
console.log("Total students: " + scores.length);
console.log("Pass rate: " + ((passedStudents.length/scores.length)*100).toFixed(1) + "%");