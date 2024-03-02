// ------------------------>>>>>>>>> Callback function <<<<<<<<<<<<<<<<<<<<<------------------------


// ---------->>>>>>>>>>> Callback Function in synchronous programing

// function myfunc(callback){
//     console.log("function is doing task 1");
//     callback();
// }

// myfunc(()=>{
//     console.log("function is doing task 2")
// })


// ------------
// function getTwoNumbersAndAdd(number1,number2,onsuccess,onFailure){
//     if(typeof number1=="number" && typeof number2=="number"){
//         onsuccess(number1,number2);
//     }
//     else{
//         onFailure();
//     }
// }

// function onsuccess(num1,num2){
//     console.log(num1+num2)
// }

// function onFailure(){
//     console.log("wrong data types")
//     console.log("please pass numbers only")
// }

// getTwoNumbersAndAdd(4,4,onsuccess,onFailure)
// getTwoNumbersAndAdd("4",4,onsuccess,onFailure)


// --------- >>>>>>>>>>> Callback function in asynchronous programing
// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")

// setTimeout(() => {
//     heading1.textContent = "hello1";
//     heading1.style.color = "yellow"
    
// }, 1000);


// setTimeout(() => {
//     heading1.textContent = "hello1";
//     heading1.style.color = "yellow"
//     setTimeout(() => {
//         heading2.textContent = "hello2";
//         heading2.style.color = "green"
//     }, 2000);
    
// }, 1000);


// --------------------->>>>>>>>>>>>>>> callback hell <<<<<<<<<<<<<<<<<<<<<<-------------------------
// callback hell or pyramid of doom both are same

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

// ---------->>>>>>>>>>>> Callback hell or pyramid of doom with setTimeout

// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red"
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown"
                            
//                         }, 1000);
                        
//                     }, 3000);
                    
//                 }, 2000);
                
//             }, 1000);
            
//         }, 2000);
//     }, 2000);
    
// }, 1000);


// ---------------->>>>>>>>>>>> callback hail or pyramid of doom with function 


// function changeText(element,text,color,time,onSuccessCallback){
//     setTimeout(() => {
//         element.textContent = text;
//         element.style.color = color;
//         onSuccessCallback();
//     }, time);
// }


// changeText(heading1,"one","violet",1000,()=>{
//     changeText(heading2,"two","purple",2000,()=>{
//         changeText(heading3,"three","red",2000,()=>{
//             changeText(heading4,"four","pink",1000,()=>{
//                 changeText(heading5,"five","green",2000,()=>{
//                     changeText(heading6,"six","blue",3000,()=>{
//                         changeText(heading7,"seven","brown",1000,()=>{

//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
