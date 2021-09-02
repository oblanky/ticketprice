let age = 21;
let day = 'Monday';
let price;  
if(age < 12){
    price = 50;
}
else if (age >= 18 && age < 65) {
    price = 100;
}
else if (age >=65 && ( day ==='Saturday'|| day ==='Sunday')){
    price = 70;
}
else {
    price =80;
}
console.log("Ticket price " + price);