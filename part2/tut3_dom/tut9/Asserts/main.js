let allButton = document.querySelectorAll("button")

//1. here we use  decleartion function  --> the value of "this" is the element on which it is called 

// for(let button of allButton){
//     button.addEventListener('click',function(){
//         console.log(this)
//     })
// }

// ---------------------------------
// for(let button of allButton){
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//     })
// }

// --------------------------------
// allButton.forEach(function(button){
//     button.addEventListener('click',function(){
//         console.log(this)
//     })
// })


// ---------------***********  Event Object **********************----------------------------------

/*
1. Event object provide all information about event ,which use in element
2. "this" keyword not provide all information about event
3. using Event object we can also access which element use this event, mean something like a "this" keyword
4. major diffrenc of "this" and Event object is 
    I. "this" keyword use only decleartion function  
    II. but Event object use in decleartion function and arrow function both



*/

let btn = document.querySelector("#fbtn")
// btn.addEventListener('click',function(event){
//     console.log(event)
//     console.log(event.target)
// })


// btn.addEventListener('click',(event)=>{
//     console.log(event)
//     console.log(event.target)
// })


// --------------------------------------------
// let allButton2 = document.querySelectorAll("button")
// for(let button of allButton2){
//     button.addEventListener('click',(event)=>{
//         console.log(event.target)
//     })
// }



// ----------------------**********  Event Behind the scence **********-----------------------------

// console.log("script start  !!!!!!!")
// let allbtn = document.querySelectorAll("button")
// allbtn.forEach((element)=>{
//     element.addEventListener('click',(event)=>{
//         let num = 0;
//         for(let i=0; i<=1000000000; i++){
//             num+= 1;
//         }
//         console.log(event.currentTarget.textContent,num)
//     })
// })

// let outervar = 0;
// for(let i=0; i<=1000000000;i++){
//     outervar +=1;
// }

// console.log("value of outer variable is ",outervar);
// console.log("script end !!!!")



// -----------*************** little practice with click event ************-----------------------
// let allb = document.querySelectorAll('button')
// allb.forEach(element=>{
//     element.addEventListener('click',(event)=>{
//         event.target.style="background-color:black;color:blue;"
//     })

// })


