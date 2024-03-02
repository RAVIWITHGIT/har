// ----------->>>>>>>>>>>>>> synchronous programming vs asynchronous programing <<<<<<<<<------------

/* --------------->>>>>>>>>>>>>> synchronous programming
1. synchrounous programming run line by line
2. synchrounous programming is single threaded
3. As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
4. synchronous programming block the code
*/

// console.log("script start")

// for(let i=1; i<1000; i++){
//     console.log("inside for loop")
// }
// console.log("script End")


/* -------------->>>>>>>>>>>>> asynchronous programming
1. Asynchronous code allows the program to be executed immediately whereas the synchronous code will block further execution of the remaining code until it finishes the current one. 

2. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.

*/

// console.log("script start")

// setTimeout(() => {
//     for(let i=1; i<1000; i++){
//             console.log("inside for loop")
//         }
// }, 2000);

// console.log("script End")

//notes------> settimeout return id , using this id we can stop settimeout
// console.log("script start")

// let getId = setTimeout(() => {
//     for(let i=1; i<1000; i++){
//             console.log("inside for loop")
//         }
// }, 2000);

// console.log("script End")
// console.log("clear time out")
// clearTimeout(getId)



/* ------------>>>>>>>>>>>>>>> SetInterval
1. SetInterval also return id 
2. using this id we stop SetInterval , using clearinterval
*/


// console.log("script start")
// setInterval(() => {
//     let j = 0;
//     for(let i=0; i<1000;i++){
//         j+=i
//     }
//     console.log("total of j is ",j)
//     console.log(Math.random())
    
// }, 1000);
// console.log("script end")
