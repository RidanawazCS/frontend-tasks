//console.log("hello")
//difference between let var and const

//var a =10;
//var a=20;
//console.log(a)

//let a =20;
//a = 56;
//console.log(a)

//using let keyword a variable with same name cannot be initialized more than once like var kryword

//in const a variable with same name cannot be initialized or declared more than once

//const a = 25;
//console.log(a)
 //here used are backticks not inverted commas
//let fname = "Rida";
//let lname = "nawaz";
//let fullname = `My name is ${fname} ${lname} ${10 + 20}`;
//console.log(fullname)


//function myFunction(){
    //console.log("hello");
//}
//myFunction();


//arrow function
//let MyFunction1 = (a) =>{
    //console.log(`hello ${a}`);
//};

//MyFunction1("this is me arrow function");


//Rest operator
//let MyFunction2 = (a,...b) =>{
    //console.log(a);
   // console.log(b);
//};

//MyFunction2("rida",67,56,45);

//Spread operator
//let arr = [23,75,4,35];
//let arr1 = [23,6475,87];

//let newarray = [...arr,...arr1,56,87,34,23];
//console.log(newarray);

//let obj = {
    //name :"rida",
//};

//let newobj = {
    //...obj,
  //  age : 25,
//};

//console.log(newobj);

//let array = [234, 675, 456, 87];
//for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);

//Arraymethod Map Filter findIndex Filter Replace and Find

//map function
//let arr = [1234,453,87,6];

//.const Myfunction = (value,index,array) =>{
   //return value + 2;
//}
//let newArray = arr.map(Myfunction);
//console.log(newArray);

//filter method
//filter method works same as map but difference is that we can filter certain values from a specific array values based on some specific condition.

//let array = [1234,453,87,6];

//const Myfunction2 = (value,index,array) =>{
   //if(value == 1234){
    //return value;
   //}
//}
//let Val = array.filter(Myfunction2);
//console.log(Val);

//find method

//let array = [1234,453,87,6];
//const Myfunction2 = (value,index,array) =>{
    //if(value <= 87){
     //return value;
    //}
 //}
 //let Val = array.find(Myfunction2);
 //console.log(Val);

 //findindex method will find the index of the required value and display it

//let array = [1234,453,87,6];
//const Myfunction2 = (value,index,array) =>{
    //if(value <= 87){
     //return value;
    //}
 //}
 //let index = array.findIndex(Myfunction2);
 //console.log(index);

 //reduce method
 //reduce method will reduce the values of the array and show a single output value

//let arr = [1234,453,87,6];
//let value = arr.reduce((h1,h2) => {
    //return h1 + h2;
//})
//console.log(value);

const Myfunction = require('./index1.js');
Myfunction("Rida");