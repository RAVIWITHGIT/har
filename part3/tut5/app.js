// const xhr = new XMLHttpRequest();
// console.log(xhr)

//-----------------------------
// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL)

// xhr.send()
// console.log(xhr)


// ---------------------------
// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL)

// xhr.onreadystatechange= function(){
//     // console.log(xhr)
//     // console.log(xhr.readyState)
//     if(xhr.readyState==4){
//         console.log(xhr)
//         console.log(xhr.response)
//         console.log(typeof(xhr.response))

//     }
// }

// xhr.send()


// ----------------------------
// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL)

// // onreadystatechange tab tab call hoga jab-jab xhr object ka readystate change hoga

// xhr.onreadystatechange= function(){
//     if(xhr.readyState==4){
//         console.log(typeof(xhr.response))
//         console.log(xhr.response)
//         let convert = JSON.parse(xhr.response)
//         console.log(convert)
//         console.log(typeof(convert))
//     }
// }

// xhr.send()


// -----------------------------
// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL)


//note ---> jaisa ki hamana oopar dekha ke onreadstate tab tab call hoga jab-jab xhr object ka state change hoga , jabaki onload mein aisa nahin hota hai . onload tab chalaega jab usaka readyState==4 hoga

// xhr.onload = function(){
//     const response = xhr.response
//     const data = JSON.parse(response)
//     console.log(data)
// }

// xhr.send()


// ------------------------------ XHR error handling -----------------------------------------------

// const URL = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL)

// // response sahee nahin aane par ham useka error handling kaise karenge, yah dekhata hain

// xhr.onload = ()=>{
//     if(xhr.status>=200 && xhr.status <300){
//         const data = JSON.parse(xhr.response);
//         console.log(data)

//     }else{
//         console.log("something went wrong")
//     }


// }

// xhr.send()


//-----------**************** newtork related handling , network mean wifi off
// const URL = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL)


// xhr.onload = ()=>{
//     if(xhr.status>=200 && xhr.status <300){
//         const data = JSON.parse(xhr.response);
//         console.log(data)

//     }else{
//         console.log("something went wrong")
//     }


// }

// xhr.onerror =()=>{
//     console.log("network error")
// }

// xhr.send()


// -------------************** ek saath do response ko lena.
// const URL = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL)


// xhr.onload = ()=>{
//     if(xhr.status>=200 && xhr.status <300){
//         const data = JSON.parse(xhr.response);
//         console.log(data)
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const  URL2 = `${URL}/${id}`
//         xhr2.open("GET",URL2)
//         xhr2.onload = ()=>{
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2)
//         }
//         xhr2.send();

//     }else{
//         console.log("something went wrong")
//     }


// }

// xhr.send()



// -----------------********************** XHR USING PROMISE

// const URL = "https://jsonplaceholder.typicode.com/posts"

// function sendRequest(method,url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload = function(){
//             if(xhr.status >=200 && xhr.status <300){
//                 resolve(xhr.response);
//             }
//             else{
//                 reject(new Error("something Went wrong"))
//             }
//         }
//         xhr.onerror = function (){
//             reject(new Error("something went wrong"))
//         }
//         xhr.send();
//     })
// }

// const getpermise = sendRequest("GET",URL)
// getpermise.then((response)=>{
//     const get = JSON.parse(response)
//     console.log(get)
// }).catch((getError)=>{
//     console.log(getError)
// })


// ---------**************** 2 resopnse with xhr promise and chaning
const URL = "https://jsonplaceholder.typicode.com/posts"

function sendRequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status >=200 && xhr.status <300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("something Went wrong"))
            }
        }
        xhr.onerror = function (){
            reject(new Error("something went wrong"))
        }
        xhr.send();
    })
}

const getpermise = sendRequest("GET",URL)
getpermise.then((response)=>{
    const get = JSON.parse(response)
    return get
}).then(data=>{
    const id = data[3].id;
    return id;
}).then(id=>{
    const URL2 = `${URL}/${id}`
    return sendRequest("GET",URL2)
}).then(newResopnse =>{
    const newData = JSON.parse(newResopnse);
    console.log(newData);
}).catch(error=>{
    console.log(error)
})

