
let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.split(" ").length;
console.log("Word count: " + wordCount);

let hasBad = feedback.includes("bad");
let hasPoor = feedback.includes("poor");

if(!hasBad && !hasPoor) {
    console.log("Feedback type: Positive Feedback");
} else {
    console.log("Feedback type: Needs Improvement");
}

console.log("\nFeedback analysis complete.");