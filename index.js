// 1. way to print javaScript
//  console.log("hello world");
// alert("me");
// document.write("This is document write");

// 2. javaScript print API
// console.log("Hello World", 4+6 , " Another log ")
// console.warn("warning");
// console.error("error");
// console.assert(4==(6-2));
 
// javaScript Variable
// What are variable = Container to store data values
/*
multi 
line 
Comment */
// var number1 = 34;
// var number2 = 56;
// console.log(number1+number2);

// 4. Data type in javaScript

// Number
// var num = 444;
// var num =55;

//String
// var str1 = "This is also a string";
// var str1 = "This is also a string2";

//object
// var marks ={
//     ravi:90,
//     sandesh: 99,
//     mangesh:100
// }
// console.log(marks);

//booleans 
// var a = true;
// var b = false;
// console.log(a,b);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// At a very high level, there are two type of data type  in JavaScript
// 1. primitive data type: -->> undefined,null,number, String,boolean,Symbol
// 2. Reference data type: Array and Objects

// var arr =[1,2,3,4,4];

// operatore in javaScript
//Arithamatic operatore
// var a = 20;
// var b = 30;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a/b is ",a/b);
// console.log("The value of a*b is ",a*b);

//Assiment Operatore
// var c = b;
// c+ = 2;
// c- = 2; //c = c-2;
// c* =2;
//c/= 2;
//console.log(c);

//Comparison Operatore
// var x = 34;
// var y = 56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

//logical Operatore

//And Operatore
// console.log(true & true);
// console.log(true &  false);
// console.log(false & false);

//OR Operatore
// console.log(true || true);
// console.log(true ||  false);
// console.log(false || false);

//Logical not 
// console.log(!true );
// console.log(!false);

//Function 
// Dry = Do not repeat yourself
// function avg(a,b) {
//     //  return (a+b)/2;
//     c =(a+b)/2
//     return c;
// }
// Dry = Do not repeat yourself
// c1 = avg(20,30);
// c2 = avg(10,20);
// console.log(c1,c2);


//Conditional in JS
// var age = 34;
// Single if statement
// if(age>18){
    // console.log("you are not a kid ");
//  }
// if(age>18){
//     console.log("you are not a kid ");
// }
// else{
//     console.log("you are a kid ");
// }

// if-else Ladder
// if(age>32){
//     console.log("you are not a kid.. ");
// }
// else if(age>26){
//     console.log("ab app bachhe nahi rahe");
// }
// else if (age>22){
//     console.log("Bachhe nahi rahe app");
// }
// else{
//     console.log("Bachhe  rahe ");
// }
// console.log("end of Ladder");


//LOOP
//for LOOP
// var arr = [1,2,3,4,5,6,7,8];
//  console.log(arr);
//  for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
//  }
 
// var arr = [1,2,3,4,5,6,7,8];
// forEach
//  arr.forEach(function(element){
//     console.log(element);
//  })

//while loop
// var arr = [1,2,3,4,5,6,7,8];
// var j=0;
// let j= 0;
// const a = 0;
// a++;
// a = a+1;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// var arr = [1,2,3,4,5,6,7,8];
//DO while loop
// do{
//     console.log(arr[j])
//     j++;
// }while(j<arr.length);

//break statement
// var arr = [1,2,3,4,5,6,7,8];
// for(var i =0;i<arr.length;i++){
//     if(i==2){
//         break;
//     }
//     console.log(arr[i])
// }


//continue
// var arr = [1,2,3,4,5,6,7,8];
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// let myarr= ["Fan","camera",34,null, true];
//Array Method


// console.log(myarr.length);

//delete one element from last 
// myarr.pop();

//Add one element at the end 
// console.log(myarr.pop);
// myarr.push("sandesh");

//pahale wale element ko chod kar baki bach jate hay 
// myarr.shift()

// const newlen = myarr.unshift("sandesh");
// console.log(newlen);
// myarr.toString()
// myarr.sort();
// console.log(myarr);
//And bahut method hote hay search on google

//String Method in JavaScript
// let myLovelyString = "sandesh is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(0,5))

// d=myLovelyString.replace("sandesh","mangesh");
// console.log(d);
//String may aur bhi method hote hya search on google 


//Date Method
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());



//DOM = DOCUMENT OBJECT MODULE
//DOM manipulation
//DOM mothod
//  let elem = documen/t.getElementById('click');
// console.log(elem);
// console.log(elem);

//DOM MANIPULATION
// let ele = document.getElementById('click');
// console.log(ele);
// let elemClass = document.getElementsByClassName("container");
// console.log(ele02);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(ele.innerHTML);
// console.log(ele.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
//  tn = document.getElementsByTagName('div');
//  tn1 = document.getElementsByTagName('button');
//  console.log(tn);
//  console.log(tn1);
//  createdElement = document.createdElement('p') ;
//  createdElement2 = document.createdElement('b');
//  createdElement2.innerText = "This is a created bold";
//  tn[0].appendChild(createElement);
//  tn[0].createChild(createdElement2,createdElement);
 //removeChild(element);---->remove an element

// Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
//  sels = document.querySelectorAll('.container');
//  console.log(sels);

 // Event in JAVASCRIPT

// function clicked(){
//     console.log("The function was click ");
// }

// window.onload = function(){
//     console.log("The document was loaded");
// }

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//     console.log("click huaaaaa");
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse over on container ");
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container");
// })

// let prevhtml =  document.querySelectorAll('.container')[1].innerHTML ;
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevhtml;
//     console.log("mouse up clicked on container");
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//     console.log("mouse down  clicked on container");
// })


//Arrow Function 
// function sum(a,b){
//     return a+b;
// }

// sum=(a,b)=>{
//    return a+b;
// }


// SetTimeout and setinterval
// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interwal has fire</b>";
//     console.log("I am your log");
// }
// setTimeout(logKaro,1000);
// setInterval(logKaro,2000);
// clr = setTimeout(logKaro,5000);
// clr = setInterval(logKaro,2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//Local storage in JS
// Local store hold data at local place in your system 
// localStorage.removeItem('name')
// localStorage.clear();

//JSON
//read on Google 
// obj = {name:"sandesh", length: 1, a:{this: 'that"'}}
// jso = JSON.stringify(obj);
// console.log(typeof json )
// console.log(jso)
// parsed = JSON.parse('{name:"sandesh", "length": 1, "a":{"this": "that"}}');
// console.log(parsed);

// Template literals - Backticks
// a= 30;
// console.log(`This is my ${a}`);


//EcmaScript
















 














