//variables 
var b = 'nalisha';
console.log(b);

var a = 23232;
console.log(a);

// var age = ("What is your age?");
// document.getElementById('someText').innerHTML = age;

/*
 step 1) Create a function
 step 2) call the function
*/

//create
function fun() {
    console.log("this is function");
}

//call
fun();

/*
 Lets create a function that takes in a name and says hello followed by your name 
*/
var name;
// var name = prompt("What is your name?? ");
function greeting(name) {
   var result= 'Hello' + ' ' + name;  //string concatination
   console.log(result);
}
greeting(name);

//How to arguments work in function?
function sum(num1 , num2){
 var result = num1 + num2
 console.log(num1 + num2);
}
sum(12,18);

/*while loops

var num = 1;
while (num <10) {
    num +=1 ;
    console.log(num);
}
*/

//Fall Loops
/*
var and let are both used for variable declaration in javascript but 
the difference between them is that var is function scoped and let is block scoped
 let allows you to declare variables that are limited to the scope of a block statement,
or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope
*/
let num  = 2;
for(num =2 ;num < 10;num++){
    console.log(num);
}

//Data types
var yourAge = 18 ;                               //Number
let youName = 'Bob';                             // String
let Objname = {first: 'Nalisha' ,last: 'rathod'};//Object
let truth = false;                               //Boolean 
let groceries = ['aaple', 'banana', 'orranges'] ;; //array
let random;                                    //undefined
let nothing = null //null



//Strings - Common Methods
let fruit = 'banana ,aaple, chiku';
let morefruits = 'banana\napple';             //new Line

console.log("Length",morefruits.length);
console.log("Index", morefruits.indexOf('nan'));
console.log(morefruits.slice(7,11));        // including and upto
console.log(morefruits);
console.log(morefruits.replace('ban', '123'));
console.log(morefruits.toUpperCase());
console.log(morefruits.toLowerCase());
console.log(morefruits.charAt(3));
console.log(morefruits[3]);
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); //split by a characters


//Arrays in Javaacripts
/*  [] - brackets
    () - pararentheses
*/
let fruits = ['banana', 'aaple', 'orange' , 'pineapples'];
fruits = new Array('banana', 'aaple', 'orange' , 'pineapples');

 console.log(fruits[3]); //access values at index 3rd

 fruits[0] = "Pear";
// console.log(fruits);

// for( let i = 0 ; i < fruit.length ; i++){
//     console.log(fruits);
// }

//array common methods
console.log('toString',fruits.toString()); // convert array into strings
console.log('Join' , fruits.join('-'));
console.log('Pop',fruits.pop(), fruits); //pop last element
console.log('Push',fruits.push('berries'), fruits); //Push it into as a last elemenents(apends)

//another way of pushing
console.log(fruits[4]);
fruits[4] = 'new fruit';
fruits[fruits.length] = 'new fruit';
console.log(fruits);

fruits.shift(); // remove first elelemt to an array
console.log(fruits);

fruits.unshift('kiwi'); // add first elelemt to an array
console.log(fruits);

//concatinationg an array
let veg = ['asparagus', 'tomato', 'brocilli'];

let allGroceries = fruits.concat(veg);
console.log(allGroceries);

//Slice array
console.log(allGroceries.slice(1,4));

console.log(allGroceries.reverse()); //reverse and array
console.log(allGroceries.sort()); //alphabetically sorrted
//sortimg an array

let someNumbers = [3,4,56,8,4,33,84,2,0,5,23,66,99,100];
console.log(someNumbers.sort(function(a,b) {return a-b})); //sorted in asending order
console.log(someNumbers.sort(function(a,b) {return b-a})); //sorted in decending order

let emptyArray = new Array();
for( let i = 0; i <= 10 ; i++){
   emptyArray.push(i);
}
console.log(emptyArray);

//Objects in Javascript

let student = {
    firstName : 'Nalisha' , 
    lastName: 'Rathod', 
    'age':27,
    height: 170,
    studentIndfo: function() {
        return this.firstName 
        + '\n '+ this.lastName + '\n' + this.age
    }
};
// console.log(student.firstName);
// console.log(student.lastName);
// student.firstName = 'Ankit'; //change value
// console.log(student.firstName);
// student.age++;  //increment the age
// console.log(student.age);
console.log(student.studentIndfo());

var age = 45;
//If else condition and Switch statements 
// && AND
// || OR
if((age >= 18) && (age <= 35)) {
   status = 'tagent demo';
   console.log(status);

}
else {
    status = 'not';
    console.log(status);
}

//Swtich statements
//differenate betwenn weekday vs weekend
//day 0 - Sunday
// day 6 - Staturday
// var age = prompt("Enter the day");
switch(6){
  case 0 :
      text = 'weendend';
      break;
  case 5 :
      text= 'weendend';
      break;
  case 6 :
      text= 'weendend';
      break;
  default:
     text= 'weekday';
}

console.log(text);


