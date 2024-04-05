//INTRODUCTION TO JAVASCRIPT

//console.log("I love ugali"); This is how to print something
//console.log("I love coding");
//window.alert("I'm learning Javascript")This how to create an alart

//COMMENTS
// you should know this is a comment

/*
 This is 
 a multi commenting in javascript
*/

//VARIABLE 

/*let age; This is how to create a variable in js
age = 25;
let age = 25;
number data type
age = age + 1
string 
let student = "Tim"
boolean
let user = true


console.log(age);
console.log("Hello",student);
console.log(user);

document.getelementbyid(p1).innerHTML = "Hello" + student;
document.getelementbyid(p3).innerHTML = "You're" + age + "years old";
*/

/*ARITHMETIC EXPRESSION
Operands are values 
Operators are mathemeatical signs
let student = 22;
student = student + 1;
student = student - 1;
student = student * 2;
console.log(student)
*/

/*
let student = 22;
student += 1 //
student -= 1 
student *= 1 
student /= 1 
//let extrastudent = student % 3;
//console.log(extrastudent)
console.log(student)
*/

/*BODMAS
let result = 1 + 3 * (2 + 4);
console.log(result)
*/

/*UESR INPUT
let username = window.prompt("Enter Name: ")
console.log(username)
*/

/*let username;
document.getElementById("Mybutton").onclick = function() {
    username = document.getElementById("MyText").Value;
    console.log(username);
}
*/

/*TYPE CONVERSION
let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age);
age += 1;
console.log("Happy birthday", age, "yeas old");
*/

/*
let x;
let y;
let z;
x = Number("3.14");
y = String(3.14);
z = Boolean("Ugali");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

//CONST


/*
const PI = 3.145; // This isa constant variable that can't be changed
let radius;
let circumference;

radius = window.prompt("Enter the radius of circumference");
radius = Number(radius);
circumference = 2 * PI * radius;

console.log('The circumference is ', circumference);
*/

//MATHS
/*let x = 3.145;
let y = 6;
let z = 9;
let maximum;
let minimum;
x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x);

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

console.log(maximum);
console.log(minimum);
console.log(x);
let x;
x =Math.PI
console.log(x);
*/

/*HYPOTENUS
let a;
let b;
let c;

a = window.prompt("Enter value of a");
a = Number(a);

b = window.prompt("Enter value of b");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
console.log("Side C:", c);   
*/
//Hypotenus via HTML tex box

document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("aTextBox").value;
a = Number(a);

b = document.getElementById("bTextBox").value;
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
}























