let bonus = 5000;

function calculateSalary(){
    let salary = 40000;
    let isPermanent = true;
    
    if(isPermanent){
        salary = salary + bonus;
    }
    
    console.log("Total salary: " + salary);
}

calculateSalary();
console.log("Bonus after function: " + bonus);

isPermanent = false;
calculateSalary();