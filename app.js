// <-----------------------------------Assignment no 2------------------------------------------------------>
// step1 start



var subject1 = prompt("Enter marks of java")
var subject2 = prompt("Enter marks of Formal Methode")
var subject3 = prompt("Enter marks of Operation Research")
var subject4 = prompt("Enter marks of physics")
var subject5 = prompt("Enter marks of java")

console.log(subject1);
console.log(subject2);
console.log(subject3);
console.log(subject4);
console.log(subject5)

var officer = "yes";
if(officer == "no"){
    console.log("Document Submitted")
} else{
    console.log("wapsi")
    document.write("wapsi")
}

// step1 end

// step2 start


var subject1 = prompt("Enter marks of java")
var subject2 = prompt("Enter marks of Formal Methode")
var subject3 = prompt("Enter marks of Operation Research")
var subject4 = prompt("Enter marks of physics")
var subject5 = prompt("Enter marks of java")
document.write(subject1)
document.write(subject2)
document.write(subject3)
document.write(subject4)
document.write(subject5)

var officer = "yes";
if(officer == "no"){
    console.log("Document Submitted")
} else{
    console.log("wapsi")
    document.write("wapsi")
}
// step2 end


// <----------------------------------------Assignment no 2-------------------------------------------->
// step1 start

var officer = true
var assistant = true

if(officer ==false){
    console.log("officer documnent submitted")
}
else if(assistant ==true){
    console.log("assistant documents submitted")
}
else{
    console.log("documents not submitted")
}

var age = prompt("enter your age")
var studentcard = false;

if(age > 18){
    console.log("Student allow");
}
else if(studentcard == true){
    console.log("student allow on studentcard");
}
else{
    console.log("not allow")
}
// step1 end





// step2 start
// <-------------------Total marks and Obtained marks and grade-------------------------->
var subject1 = +prompt("Enter marks of java")
var subject2 = +prompt("Enter marks of Formal Methode")
var subject3 = +prompt("Enter marks of Operation Research")
var subject4 = +prompt("Enter marks of physics")
var subject5 = +prompt("Enter marks of java")
var totalmarks = 500;
var obtainedmarks = subject1 + subject2 + subject3 + subject4 + subject5;
var total = (obtainedmarks / totalmarks  ) * 100;
console.log(total + "%");
if(total >= 80){
    console.log("A+ grade")
}
else if(total >= 70){
    console.log("A grade")
}
else if(total >= 60){
    console.log("B grade")
}
else if(total >= 50){
    console.log("C grade")
}
else if(total >= 40){
    console.log("D grade")
}
else{
    console.log("failed")
}

// <-------------------Total marks and Obtained marks and grade-------------------------->
// step2 end





// <-------------------Total marks and Obtained marks and percentage-------------------------->
var subject1 = +prompt("Enter marks of java")
var subject2 = +prompt("Enter marks of Formal Methode")
var subject3 = +prompt("Enter marks of Operation Research")
var subject4 = +prompt("Enter marks of physics")
var subject5 = +prompt("Enter marks of java")
var totalmarks = 500;
var obtainedmarks = subject1 + subject2 + subject3 + subject4 + subject5;
var total = (obtainedmarks / totalmarks  ) * 100;
console.log(total);
if(total >= 80){
    console.log("A+ grade")
}
else if(total >= 70){
    console.log("A grade")
}
else if(total >= 60){
    console.log("B grade")
}
else if(total >= 50){
    console.log("C grade")
}
else if(total >= 40){
    console.log("D grade")
}
else{
    console.log("failed")
  }
  // <-------------------Total marks and Obtained marks and grade-------------------------->
  // step2 end




  
  
// step1 start
// <-------------------------------Array------------------------------------------>

var fruit1 = "mango";
var fruit2 = "apple";
var fruit3 = "bannaa";
var fruit4 = "dry";
var fruit5 = "grapes";

var fruits = ["mango","apple","bannaa","dry","grapes"];

console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[0]);

// <-------------------------------Array------------------------------------------>
// step2 end
