// ------------------------ iterator object---------------------------------------
let myobj = {
    name:'ravi',
    age:21,
    from:'jaipur',
    hobbie:'coding'
}
console.log(myobj)

// ----- we can not access value using below code becasue here key store in i varaible , so we can not access value using myobj.i , becasue i is not key rather i is varaible which store key

// for(let i in myobj){
//     console.log(myobj.i)
// }

// ------this is right approach

// for(let i in myobj){
//     console.log(myobj[i])
// }

// ----------- we can access object value using this - Obect.keys()
// console.log(Object.keys(myobj))
// console.log(typeof (Object.keys(myobj)))


// for(let key of Object.keys(myobj)){
//     console.log(key)
// }

// for(let key of Object.keys(myobj)){
//     console.log(myobj[key])
// }