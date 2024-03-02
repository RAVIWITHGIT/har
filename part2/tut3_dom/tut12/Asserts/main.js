// ----------------------- Event Bubbling | Capturing | delegation ---------------------------------

let grandparent = document.querySelector(".grandparent")
let parent = document.querySelector(".parent")
let child = document.querySelector(".child")


// ----------->>>>>>>>>>>>>> Event Bubbling
/*
1. if we put the same event in the child, in the parent and in the grandparent, then when we click on the child, the events of the grandparent and parent also automatic click
2. This is called Event Bubbling

*/
// document.body.addEventListener("click",()=>{
//     console.log("click the body")
// })
// grandparent.addEventListener("click",()=>{
//     console.log("click Grandparent")
// })

// parent.addEventListener("click",()=>{
//     console.log("click Parent")
// })

// child.addEventListener("click",()=>{
//     console.log("click Child")
// })


// --------------->>>>>>>>>>>>>>>>> Capturing Event
/*
1. captruing Event is reverse of Bubbling Event
2.  in the case of babbling. it starts from the child. whereas in the case of capturing, it starts from the body or from the grandparent.

*/

// document.body.addEventListener("click",()=>{
//     console.log("click the body capturing")
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("click Grandparent capturing")
// },true)

// parent.addEventListener("click",()=>{
//     console.log("click Parent capturing")
// },true)

// child.addEventListener("click",()=>{
//     console.log("click Child capturing")
// },true)


// ---------------->>>>>>>>>>>>>>>> Event delegation
/*
1 . Event delegation not method or no any function , it is only concept on event listner
2 . it help to more readable code and less memory
3.  upper we add diffrent event listner for diffrent element , but using Event delegation we can add only grandparent and target all element

4.  if we add event in parent then we targert any child element without add any event on child element , this concept call Event Delegation

5. we can more understand about Event Delegation in next project

*/


// grandparent.addEventListener("click",(event)=>{
//     console.log(event.target)
// })