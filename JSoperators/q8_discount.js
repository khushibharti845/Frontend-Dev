
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalPrice = 0;
for(let i=0; i<cart.length; i++){
    totalPrice = totalPrice + cart[i].price;
}
console.log("Cart total: " + totalPrice);

let discountedTotal = cart.reduce(function(total, product){
    let price = product.price;
    
    if(product.category === "electronics"){
        price = price * 0.9;
    } else if(product.category === "fashion") {
        price = price * 0.95;
    }
    
    return total + price;
}, 0);

if(totalPrice > 50000){
    discountedTotal = discountedTotal * 0.95;
    console.log("Extra 5% discount applied!");
}

console.log("Final total after discounts: " + discountedTotal.toFixed(2));