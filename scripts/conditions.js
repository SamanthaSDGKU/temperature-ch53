console.log("if-statement ");

//----- if statement  ----- 
// if(condition){
// code to be executed if condition is true
//}

if(3<=1){
    console.log("I am inside the if statement");
}

let student1 = 45;
let student2 = 55;

if(student1 == student2){
    console.log("Both are the same");
}

// ---- if statement ---- 
// if(condition){
//     code to be executed if condition is true
//}else{
//     code to be executed if condition is false
//}

let isTrue = false;

if(isTrue){
    console.log("Yes");
}else{
    console.log("No");
}

//Challenge: 
// check if the age is greater than 21
// T: display "you are an adult" 
// F: display "you are underage"

let age = 50;

if(age>=21){
    console.log("you are an adult");
}else{
    console.log("you are an underage");
}

//--- if-else if-else statements --- 

// if(condition){
//     code to be executed if condition is true
// }else if(condition2){
//     code to be executed if condition2 is true
// }else{
//     code to be executed if conditions are false
// }

age =5;

if(age<13){
    console.log("Child");
}else if(age<20){
    console.log("Teenager");
}else if(age<64){
    console.log("adult");
}else{
    console.log("Senior");
}


let week = new Date().getDay();

if(week == 1){
    console.log("Mon");
}else if(week == 2){
    console.log("Tue");
}else if(week == 3){
    console.log("Wed");
}else if(week == 4){
    console.log("Thu");
}else if(week == 5){
    console.log("Fri");
}else if(week == 6){
    console.log("Sat");
}else if(week == 7){
    console.log("Sun");
}else{
    console.log("Invalid");
}

// Challenge: Movie ticket price calculator

function ticketCalculator(){
    let age = prompt("Enter the age");
    let price;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10
    }

    console.log("Your ticket price is: $" + price);
}

//challenge:Weather Outfit suggestion

function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    if(tmp<15){
        outfit="Jacket";
        document.getElementById("weather").classList.add("cold");
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt";
    }

    document.getElementById("weather").innerHTML="You should wear : " + outfit;
}