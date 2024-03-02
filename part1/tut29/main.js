// ---------------------------- Scope In varible -------------------------------------

//*****************  block scope vs function scope

// --- let and const are block scope

// {
//   let firstName = 'ravi'  
//   console.log(firstName)
// }
// console.log(firstName)

// --------

// {
//   let firstName = 'ravi'  
//   console.log(firstName)
// }

// {
//   let firstName = 'shiv'  
//   console.log(firstName)
// }

// ----------
// {
//   const firstName = 'ravi'  
// }
// console.log(firstName)


// --------------------------- var is function scope

// {
//     var firstName = 'ravi'
//     console.log(firstName)
// }

// ----------
// {
//     var firstName = 'ravi'
// }
// console.log(firstName)

// ---------

// {
//     var firstName = 'ravi'
//     console.log(firstName)
// }
// {
//     console.log(firstName)
// }

// ---------- we write varible in if block
// if(true){
//     let firstName = 'ravi'
//     console.log(firstName)
// }
// console.log(firstName)


// if(true){
//     var firstName = 'ravi'
//     console.log(firstName)
// }
// console.log(firstName)


// ----------
// function myapp(){
//     if(true){
//         let firstName = 'ravi'
//         console.log(firstName)
//     }
//     console.log(firstName)
// }
// myapp()


// function myapp(){
//     if(true){
//         var firstName = 'ravi'
//         console.log(firstName)
//     }
//     console.log(firstName)
// }
// myapp()