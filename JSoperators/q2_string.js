let productName = " wireless headphones PRO ";

let cleanedName = productName.trim();
cleanedName = cleanedName.toLowerCase();

let words = cleanedName.split(" ");
let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
let formattedName = capitalizedWords.join(" ");

let finalName = formattedName.replace("pro", "Pro Edition");

console.log("Cleaned title: " + finalName);
console.log("Length: " + finalName.length);