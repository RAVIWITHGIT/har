// -------------------------- array method ---------------------------------------------------------

// -------------------- foreach method

// // before foreach method

// const numbers = [1,2,3,4,5]

// function myfun(number,index){
//     console.log(`index is ${index} and value is ${number}`)
// }

// for (let i = 0; i < numbers.length; i++) {
//     myfun(numbers[i],i)
    
// }


// **** upper function using foreach loop
// const numbers = [1,2,3,4,5]

// function myfun(number,index){
//     console.log(`index is ${index} and value is ${number}`)
// }

// numbers.forEach(myfun)

// **** more understanding in foreach loop , we access index and value using foreach loop

// const numbers = [1,2,3,4,5]

// numbers.forEach(function(value,index){
//     console.log(`index is ${index} and value is ${value}`)


// })

// const numbers = [1,2,3,4,5]

// numbers.forEach((value,index)=>{
//     console.log(`index is ${index} and value is ${value}`)


// })



// -------------
// const users = [
//     {firstName:'ravi',age:21},
//     {firstName:'shiv',age:22},
//     {firstName:'ranu',age:20},
//     {firstName:'shayam',age:24}

    
// ]

// users.forEach((obj)=>{
//     console.log(obj.firstName)
// })


// ----------------------------------------- map method ------------------------------

// --- map method same work as for each method 
// ---  for each is not return new array

// let arr = [1,2,3,4,5]
// let square = function(number){
//     return number*number
// }

// let squareNumber = arr.forEach(square)
// console.log(squareNumber)

// ***************** map method return new array

// let arr = [1,2,3,4,5]
// let square = function(number){
//     return number*number
// }

// let  squareNumber = arr.map(square)
// console.log(squareNumber)


// -----
// let arr = [1,2,3,4,5]

// let getValue = arr.map((value,index,arr)=>{
//     return value

// })
// console.log(getValue)

// ----
// let arr = [1,2,3,4,5,6,7,8]
// let getArr = arr.map(function (value,index,arr){
//     return value
// })
// console.log(getArr)


// ----
// let employe_info = [
//     {
//         name:'ravi',
//         age:21,
//         hobbie:'coding'
//     },
//     {
//         name:'shiv',
//         age:22,
//         hobbie:'study'
//     },
//     {
//         name:'ranu',
//         age:23,
//         hobbie:'travling'
//     },
// ]

// let getObj = employe_info.map((value)=>{
//     return value.name
// })
// console.log(getObj)


// ------------------------------------ filter method ------------------------------------------

// -**** filter method same work as map method 
//  major diffrence is we can not add condition in map method but add condition in filter method, more know about in below

// ---*** use condtion in map method

// const number = [1,2,3,4,5,6]

// let getvalue = number.map((value)=>{
//     return value%2==0

// })
// console.log(getvalue)


// --------- condtion use in filter method

// const number = [1,2,3,4,5,6]

// let getvalue = number.filter((value)=>{
//     return value%2==0

// })
// console.log(getvalue)


// --------------------------------------- reduce method --------------------------------------

// --- many use of reduce method , one is below
// --- if you want sum of all array value then we use reduce method 

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let sumValue = arr.reduce((a,b)=>{
//     return a+b
// })
// console.log(sumValue)

// ---------------
// let userCart = [
//     {
//         productId:1,
//         productName:'mobile',
//         price:12000
//     },
//     {
//         productId:2,
//         productName:'tablet',
//         price:15000
//     },
//     {
//         productId:3,
//         productName:'laptop',
//         price:18000
//     },

// ]

// let getPrice = userCart.reduce((a,b)=>{
//     return a+b.price
// },0)
// console.log(getPrice)