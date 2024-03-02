// --------------- >>>>>>>>>>>>>>> Promise <<<<<<<<<<<<<<<<--------------------------------------
/*
1. just as SetTimeout comes in asynchronous programing, similarly Promise comes in asynchronous programing
*/


// const bucket = ["coffee","chips","vegetables","rice","salt"]

/*
1. Promise is made in 2 parts
    I. produce --> mean create Promise
    II. consume -->  use promise
*/


//----> Produce 
// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("your friedRice Ready")
//     }else{
//         reject("sorry something wrong")
//     }
// })


//----> consume
// friedRicePromise.then(
//     // jab promise resolve hoga
//     (result)=>{
//     console.log(result,", Lets eat")
// },
// // jab promise reject hoga
// (error)=>{
//     console.log(error)
// }
// )



// we can also write consume code
// friedRicePromise.then((result)=>{
//     console.log(result,", Lets eat")
// }).catch((error)=>{
//     console.log(error)
// })



// -------------->>>>>>>>>>>>>> SetTimeout and Promise Using both together
// if we use SetTimeout and Promise together then the primary Promise is given first , after that the setTimeOut runs

// console.log("Code Start")

// setTimeout(() => {
//     for(let i=0; i<=5000; i++){
//         console.log("hello ravi")
//     }
    
// }, 0);

// const bucket = ["coffee","chips","vegetables","rice","salt"]


// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("your friedRice Ready")
//     }else{
//         reject("sorry something wrong")
//     }
// })


// friedRicePromise.then(
//     (result)=>{
//     console.log(result,", Lets eat")
// },
// (error)=>{
//     console.log(error)
// }
// )

// console.log("Code End")



// ----------------->>>>>>>>>>>>> function retruning promise



// function returnPromise(){
//     const bucket = ["coffee","chips","vegetables","rice","salt"]
//     return  new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("your friedRice Ready")
//     }else{
//         reject("sorry something wrong")
//     }
// })
// }

// returnPromise().then((getValue)=>{
//     console.log(getValue,", Lets eat")
// }).catch((getvalue)=>{
//     console.log(getvalue)
// })


// -------------->>>>>>>>>>>>>> Promise && SetTimeout

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve("fulfilled condition");
//             }else{
//                 reject("sorry something wrong")
//             }
//         },2000)
//     })
// }

// myPromise().then((getvalue)=>
// {console.log(getvalue)}
// ).catch((error)=>{
//     console.log(error)
// })


// ----------->>>>>>>>>>>>> diffrent way write .then() method
// const myPromise = Promise.resolve("condtion fullfiled")
// myPromise.then((getvalue)=>{
//     console.log(getvalue)
// })

// ---------
// Promise.resolve("condtion fullfiled").then((getvalue)=>{
//     console.log(getvalue)
// })

// --------->>>>>>>>>>> Promise chaning
// function returnPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("ravi");
//     })
// }


// .then() method promise return karata hai. is kaaran ham dot thain method mein ek .then() method laga sakate hain.
// jab ham koee value ko .then() method se retrun karate hain to vah indirect tareeke se is tarah ka kaam karatee hai -->return promise.resolve(value)

// returnPromise().then((value)=>{
//     value +=" ";
//     return value;     //indirect this work -->  return promise.resolve(value)
// }).then((value)=>{
//     value += "Lakshakar";
//     return value;
// }).then((value)=>{
//     console.log(value)
// })



// ---------------->>>>>>>>>>>>> handle callback hell using promise
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")


function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject();
            }
            
        }, time);
    })
}

const retrunPromise = changeText(heading1,"one","red",1000)
retrunPromise.then(()=>{
    return changeText(heading2,"two","yellow",1000)
}).then(()=>{
    return changeText(heading3,"three","blue",2000)
}).then(()=>{
    return changeText(heading4,"four","blue",2000)
}).then(()=>{
    return changeText(heading5,"five","white",1000)
}).then(()=>{
    return changeText(heading6,"six","black",1000)
}).then(()=>{
    return changeText(heading7,"seven","brown",1000)
}).catch(()=>{
    alert("got some mistak")
})


// ----- we can also write cunsumer code
// changeText(heading1,"one","red",1000)
// .then(()=>changeText(heading2,"two","yellow",1000))
// .then(()=>changeText(heading3,"three","blue",2000))
// .then(()=>changeText(heading4,"four","blue",2000))
// .then(()=>changeText(heading5,"five","white",1000))
// .then(()=>changeText(heading6,"six","black",1000))
// .then(()=>changeText(heading7,"seven","brown",1000))
// .catch(()=>alert("got some mistak"))