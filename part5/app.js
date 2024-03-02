const input_event = document.querySelector("#input-event")
console.log(input_event) 

// ------------->>> we discuss about some event listner
/*
1. keyup,input,change,keydown,
2. almose all event listner same work 
3. best of event listner in all event is "input" and many devloper use this event
*/

// keyup event--> this event occure when the user release a key on the keybord

// input_event.addEventListener("keyup",()=>{
//     console.log("trigger keyup event")
// })

// ---------------------------------********************************************

// input event --> The InputEvent Object handles events that occur when an input element is changed.
// input_event.addEventListener("input",()=>{
//     console.log("input event trigger")
// })


// ------- 
// input_event.addEventListener("input",()=>{
//     // console.log(input_event.value)
//     console.log(input_event)
// })

// ----- this is best way for get value
// input_event.addEventListener("input",(e)=>{
//     // console.log(e)
//     // console.log(e.target)
//     console.log(e.target.value)
// })


// --- we can also get value from "this keyword"
/*
1. when we use "this" keyword in arrow function then "this" keyword target global window
2. so if we use "this" keyword for specific element ,then you use "this" keyword in  normal or we can also say decleartion function
3. this is bad point for "this" keyword

*/
// -for window object
// input_event.addEventListener("input",()=>{
//     console.log(this)
// })

// --- use decleartion function, this is not good practise , you use "e" parameter 
// input_event.addEventListener("input",function (){
//     // console.log(this)
//     console.log(this.value)
// })


