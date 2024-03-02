// -------------******************   Event **********************-----------------------------------

/*
mostly use event --> Mouse Event , Keybord Event , Input Event
*/

// -------------------------------------

/*
event add karne ke 3 tarike hai
1. first ---> inline in html file
2. second and third in js file
*/

let btn_headline = document.querySelector('.btn_headline')

// second---->
// btn_headline.onclick = function(){
//     console.log("clike me")
// }


// third ----->
// btn_headline.addEventListener("click",function(){
//     alert('click the button')
// })

// btn_headline.addEventListener("click",()=>{
//     alert('click the button with arrow function')
// })




// -----------------*************** this keyword ***************-------------------------------------
let btn_headline2 = document.querySelector('.btn_headline')

/*
1. in decleartion function case --> the value of "this" is the element on which it is called
2. in Arrow function case --> the value of "this" is the window object
*/

// btn_headline2.addEventListener('click',function(){
//     console.log(this)
// })

// btn_headline2.addEventListener('click',()=>{
//     console.log(this)
// })



