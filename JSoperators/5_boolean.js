
let isDoorLocked = false;
let isWindowClosed = false;
let isAlarmOn = true;
let isOwnerInside = true;

let accessGranted = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if(accessGranted) {
    console.log("Access: Secure");
} else {
    console.log("Access: Unsafe");
}

console.log("\nSystem Status:");
console.log("Door locked: " + isDoorLocked);
console.log("Window closed: " + isWindowClosed);
console.log("Alarm on: " + isAlarmOn);
console.log("Owner inside: " + isOwnerInside);

isDoorLocked = true;
isWindowClosed = true;
accessGranted = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log("\nAfter fixing:");
console.log(accessGranted ? "Access: Secure" : "Access: Unsafe");