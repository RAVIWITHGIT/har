// ------------------------------- find method -----------------------------------------------------

let myArr = ['ravi','sh','ram','shyam']

function islength(str){
    return str.length ===3

}
// console.log(islength('cat'))
let getValue = myArr.find(islength)
// console.log(getValue)

// ---------
let myArr2 = ['ravi','sh','ram','shyam']

function islength(str){
    return str.length ===3

}
let getValue2 = myArr.find((str)=>{
    return str.length===2
})
// console.log(getValue2)


// --------------------------- REAL LIFE EXAMPLE
let user = [
    {userId:1,userName:'ravi'},
    {userId:2,userName:'shiv'},
    {userId:3,userName:'ram'},
    {userId:4,userName:'shyam'},
    {userId:5,userName:'ranu'},
]

let find_userId = user.find((str)=> str.userId===4)
// console.log(find_userId)


// ---------------------------------- every() method ------------------------------------------------
/*
1. every() method not change original array
2. every() return true and false
3. every() method check every element of array 
4. every() method true if all array element pass on condtion
5  if any one element not satisfy on condtion then give false
*/

//give true becasue all array element satisfy on condtion , here condtion is all array element is even
let everyArr = [2,4,6,8,10]
let getEveryvalue = everyArr.every((num)=>{
    return num%2==0
})
// console.log(getEveryvalue)


// give false beause one array element not satisfy on condtion , here condtion is all array element divide by 2
let everyArr2 = [2,4,6,8,9,0]
let getEveryvalue2 = everyArr2.every(num=> num%2==0)
// console.log(getEveryvalue2)


// ------********* PRACTICAL EXAMPLE
let userCart = [
    {productId:1,productName:'mobile',price:12000},
    {productId:2,productName:'tablet',price:23000},
    {productId:3,productName:'laptop',price:37000},
    {productId:4,productName:'desktop',price:50000}
]

let checkPrice = userCart.every((getDetail)=> getDetail.price>10000)
// console.log(checkPrice)



//-------------------------------------- some() method ----------------------------------------------
/*
if any one array element satisfy on condtion then some() method give true otherwise give false
*/
let myNUmber = [3,5,11,11]

let getResult = myNUmber.some((number)=> number%2===0);
// console.log(getResult)


// -------- REAL LIFE EXAMPLE
let userCartinfo = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"tablet",price:20000},
    {productId:3,productName:"laptop",price:35000},
    {productId:4,productName:"computer",price:50000},
]

let getResult2 = userCartinfo.some((number)=> number.price>30000)
// console.log(getResult2)


// ------------------------------------- fill() method -------------------------------------------

// if we want a same value in specift range then we use fill method
let myArrfill = new Array(10).fill(0)
// console.log(myArrfill)

// we can replace specific element in array use fill method
let myArrfill2 = [1,2,3,4,5,6,7]
myArrfill2.fill(0,2,5)   // value , start, end
// console.log(myArrfill2)


// --------------------------------------splice() method ----------------------------------------
/* 
1. splice method help delete element in array
2. we can use insert element in specific index using this
3. splice() method change original array
4. we can get deleted element using splice method 
5. syntex - splice(start,delete,insert)
*/

let myArrsp = [1,2,3,4,5]
// ---- delete element 
// myArrsp.splice(1,2)
// console.log(myArrsp)

// ---- insert element 
// myArrsp.splice(1,0,'ravi')
// console.log(myArrsp)

// ---- delete and insert element
// console.log(myArrsp)
// myArrsp.splice(1,2,'ravi','shiv')
// console.log(myArrsp)

// ----- get delete element
let getdelement = myArrsp.splice(1,2)
// console.log(getdelement)







