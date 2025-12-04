const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("Employee Performance Evaluation\n");

for(let i=0; i<departments.length; i++){
    let deptName = departments[i][0];
    let score = departments[i][1];
    let rating;
    
    if(score >= 90) {
        rating = "Excellent";
    }
    else if(score >= 75 && score <= 89){
        rating = "Good";
    } else if(score >= 60 && score <= 74) {
        rating = "Average";
    }
    else {
        rating = "Needs Improvement";
    }
    
    console.log(deptName + " Department");
    console.log("Score: " + score);
    console.log("Rating: " + rating);
    console.log("---");
}