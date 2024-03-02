// ------------------------************ Async await *****************************--------------------

/*
1. Async await always promise return karata hai
1. Async await fetch api ke samaan kaam karata hai
2. donon mein major diffrence yah hai kee async await mein hamen .then() lagaane kee jaroorat nahin padatee hai
*/

// ----******* using fetch method

// const URL = "https://jsonplaceholder.typicode.com/posts"

// fetch(URL).then((response)=>{
//     if(response.ok){
//         return response.json()
//     }else{
//         throw new Error("something went wrong")
//     }
// }).then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })


// ------******** using Async await and compare upper code
// const URL = "https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){
//     const response = await fetch(URL)
//     const data = await response.json()
//     console.log(data)
// }

// getPosts()


// ------************ return data using Async await
/*
1.- Async await always promise return karata hai , isalie phir hamen vahaan par then() or .catch method ka use karana padega
2.  lekin error handling ke case mein jaisa ki hamane fetch  mein dekah tha . vaise hee Async await ke case mein hoga 
3. yahaan par bhee keval catch method tabhe chalega jab network error aaegee.

*/

// const URL = "https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){
//     const response = await fetch(URL)
//     const data = await response.json()
//     return data
// }

// getPosts().then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })


// ---********* error handling in all case
// const URL = "https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){
//     const response = await fetch(URL)
//     if(response.ok){
//         const data = await response.json()
//         return data

//     }else{
//         throw new Error("somethins went wrong")
//     }
// }

// getPosts().then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })



