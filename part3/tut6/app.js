// -------------*********************** Fetch Api ******************------------------------------
/*
1. fetch ek method hai jo kee server se information lekar aatee hai
2. fetch hamesha information ko promise ke roop mein return karatee hai
*/


// const URL = "https://jsonplaceholder.typicode.com/posts"

// fetch(URL).then(resopnse=>{
//     return resopnse.json()
// }).then(data=>{
//     console.log(data)
// })


// note --> fetch method jo kee promise return karata hai , aur promise ke case mein yo to vah resolve hoga ya reject hoga , resolve hoga to vah .then() mein jaega , jaisa ki hamane oopar dekha hai.

// --------------******************

// note --> catch ke case mein agar promise reject hota hai to catch method veval tabhee chalega jab network (wifi related) related proble ho. agar isake alaava koee jaise URL mein problem hoee hai to catch method nahin chalaega.

// -- wifi off karnane par catch method chala 

// const URL = "https://jsonplaceholder.typicode.com/posts"

// fetch(URL).then(resopnse=>{
//     return resopnse.json()
// }).then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log("inside catch")
//     console.log(error)
// })

// ---*** agar ham url ko change karate hain to bhe catch method nahin chalaega
// const URL = "https://jsonplaceholder.typicode.com/postsdd"

// fetch(URL).then(resopnse=>{
//     return resopnse.json()
// }).then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log("inside catch")
//     console.log(error)
// })


// --------------***********  all error handling 
// --> note --> error throw tab hai hoga tab network ke alava or koi error ho , network ke case mein vah alag error show karega

// const URL = "https://jsonplaceholder.typicode.com/posts"

// fetch(URL).then(resopnse=>{
//     if(Response.ok){
//         return resopnse.json()
        
//     }else{
//         throw new Error("something went wrong!!!")
//     }
// }).then(data=>{
    
//     console.log(data)
// }).catch(error=>{
//     console.log("inside catch")
//     console.log(error)
// })
