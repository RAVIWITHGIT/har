// ------ without using Array Destructuring
// const myArray = ['first','second']
// let fArray = myArray[0]
// let sArray = myArray[1]
// console.log(fArray,sArray)

// ------------------------ Array Destructuring ----------------------------------

// ------ using Array Destructuring
// const myArray = ['first','second']
// let[fArray,sArray] = myArray
// console.log(fArray,sArray)

// -----
// const myArray = ['first','second']
// let[fArray,sArray] = myArray
// fArray = 'ravi'
// console.log(fArray,sArray)

// -----
// const myArray = ['first','second','third','four']
// let[fArray,...sArray] = myArray
// console.log(fArray)
// console.log(sArray)

// ----- skip one value
// const myArray = ['first','second','third']
// let[fArray,,tArray] = myArray
// console.log(fArray)
// console.log(tArray)

// ----
// const myArray = ['first','second','third','four','five']
// let[fArray,sArray,...tArray] = myArray
// console.log(fArray)
// console.log(sArray)
// console.log(tArray)





