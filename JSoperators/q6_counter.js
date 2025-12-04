let count = 0;

function increment(){
    count++;
    console.log("Count after increment: " + count);
    
    function showUpdate() {
        console.log("  [Update logged: count is now " + count + "]");
    }
    showUpdate();
}

function decrement() {
    count--;
    console.log("Count after decrement: " + count);
    
    function showUpdate(){
        console.log("  [Update logged: count is now " + count + "]");
    }
    showUpdate();
}

console.log("Starting count: " + count);
increment();
increment();
increment();
decrement();
increment();
console.log("\nFinal count value: " + count);