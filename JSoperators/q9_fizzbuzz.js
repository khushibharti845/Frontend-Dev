
let numbers = [];

for(let i=1; i<=30; i++){
    numbers.push(i);
}

let results = [];

for(let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    
    if(num % 3 === 0 && num % 5 === 0){
        results.push("FizzBuzz");
    }
    else if(num % 2 === 0) {
        results.push("Even");
    } else {
        results.push("Odd");
    }
}

console.log("Number classifications:");
for(let i=0; i<results.length; i++){
    console.log(numbers[i] + ": " + results[i]);
}