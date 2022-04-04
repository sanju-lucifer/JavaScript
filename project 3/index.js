/*alert("hello world")

console.error("this is error");
console.warn("This is a reeor");


//______________________variable______________________________
//var ,let ,const

let age =23;
console.log(age);

const ages =30;//cant be change 
//ages = 31;
console.log(ages);


const score =10;//must want valive add

console.log(score);
*/
 
//_______________data types________________

//string Number Boolean null undefind
/*
let name ='john';
let age =30;
let iscool =true;
let rating =4.5;
let x=null;
let y=undefined;
let z;

console.log(typeof name);//string
console.log(typeof age);//number
console.log(typeof iscool);//bool
console.log(typeof rating);//number
console.log(typeof x);//object
console.log(typeof y);//undefind
console.log(typeof z);//undefind
*/
//________string concatenation_______________
/*
let name ='john';
let age =30;

console.log("My name is " + name + ' and I am ' + age );

//template strong

const hello ='My name is ${name} and I am ${age}';//not working
console.log(hello);


const s='hello world';

console.log(s.length);
console.log(s.toLocaleUpperCase());
console.log(s.substring(0.5));
console.log(s.split(''));  

const s ='technology, computers , it , code';

console.log(s.split(','));

*/
/*_______________________arrays________________________________*/
/*
const numbers=new Array(1,2,3,4,5,6);
console.log(numbers);

let fruits =['apples' ,'oranges' , 'banana'];
console.log(fruits[1]);
fruits[3]='grapes';
fruits.push('mango');//add valive last
fruits.unshift('papaya');//add valive frist
fruits.pop();
console.log(fruits);
console.log(Array.isArray('apples'));//dont know answer is false
console.log(fruits.indexOf('oranges'));//view index in value
*/

/*_______________________objectlitterals______________________*/
/*
const person ={
    fname:'john',
    lname:'doe',
    age: 30,

    hobbites:['music' , 'movies' , 'sports'],

    address:{
        street: 'main street',
        city: 'new york'

    }
}
console.log(person);
console.log(person.hobbites);//access one object
console.log(person.hobbites[1]);
console.log(person.address.city);

const{fname, lname, address:{city}}=person;
console.log(fname)
console.log(city);
person.email='jon@gmail.com';//add element and valive
console.log(person.email);
*/

/*_______Make the function display "Hello" in the inner HTML of an element with the ID "demo".*/

/*
function myFunction() {
  document.
getElementById("demo").innerHTML = "Hello";
}
myFunction();
*/ 
/*___________________________________array_____________________________*/

/*

const todos =[
  {
    id:1,
    text:'Take out trash',
    isCompleted:true,
  },

  {
    id:2,
    text:'Meeting with Boss',
    isCompleted:true,
  },

  {
    id:3,
    text:'Dentist appt',
    isCompleted:false,
  },
];
*/

//console.log(todos[1].text);
//for each, map ,filter

/*todos.forEach(function(todo){
  console.log(todo.text);
});*/

/*const todoText=todos.map(function(todo){
  return todo.text
});
console.log(todoText);

const todoCompleted=todos.filter(function(todo){
  return todo.isCompleted==true;
});
console.log(todoCompleted);

*/
/*_______________________for loop______________________*/
/*
for(let i =0; i<=10;i++){
  console.log(i);
  console.log('for loop');
}
*/
/*_______________________while loop______________________*/
/*
let i=0;
while(i <= 10){
  console.log(i);
  ++i;
}
*/
/*______________________if_________________*/
/*
const x ='10';//this is a string 
if(x===10){
  console.log('x is 10');
}
else{
  console.log('x not 10');
} 


const x=12;
const color =x > 10 ? 'red': 'blue';

console.log(color);
*/

/*_________________switch____________________*/
/*
let color='blues';
switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  case 'red':
    console.log('color is green');
    break;
  default:
    console.log('color is not select')
}
*/
/*___________________functiom________________*/
/*
function addNum(num1=1, num2=1) {
 return(num1 +num2) 
}
console.log(addNum(5, 5));
*//*
const addNum=(num1=1, num2=1) =>{
  console.log(num1 +num2) 
 }
 addNum(5, 5);
*//*
 const addNum=(num1=1, num2=1) =>num1 + num2;
  
 console.log(addNum(5, 5));*/

 /*============================object orianted programing=======================*/

 /*constructor function */

 /*
 function person(fristName, lastName, dob) {
   this.fristName = fristName;
   this.fristName = lastName;
   this.dob =dob;
   this.dob =new Date(dob);
   this.prototype.getBirthYear = function() {
     return this.dob.getFullYear();
   }
 /*

   }

 }
 */
/*
 //Instantiate object
 const person1 =new person('john', 'doe', '4-3-98');
 //console.log(person1);
 //console.log(person1.dob.getFullYear());

 console.log(person1.getBirthYear());
 //console.log(person1.getFullName());
*/
 
