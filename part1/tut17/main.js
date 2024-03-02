// --------------------- how to clone array and concatentate two arrays-----------------------------

// ***** note - this is wront method becasue if we add any item in myArray using push() then myArray2 also change but we can not want change myArray2 , so this is wrong method

// let myArray = ['item1','item2'];
// let myArray2 = myArray
// console.log(myArray)
// console.log(myArray2)
// myArray.push('ravi')
// console.log(myArray)
// console.log(myArray2)

// --------------------------------------- here discuss how prefect way clone array

// ------ first , using slice method

// let myArray = ['item1','item2'];
// let myArray2 = myArray.slice(0);

// console.log(myArray==myArray2)

// let myArray = ['item1','item2'];
// let myArray2 = myArray.slice(0).concat(['ram','shyam']);

// console.log(myArray)
// console.log(myArray2)
// console.log(myArray==myArray2)

// ------- second , using concat method

// let myArray = ['item1','item2'];
// let newArray = [].concat(myArray)
// console.log(myArray)
// console.log(newArray)
// console.log(myArray==newArray)

// let myArray = ['item1','item2'];
// let newArray = [].concat(myArray,'ram','shiv')
// console.log(myArray)
// console.log(newArray)
// console.log(myArray==newArray)

// ------ third , using spread operator
// let myArray = ['item1','item2'];
// let newArray = [...myArray]
// console.log(myArray)
// console.log(newArray)
// console.log(myArray==newArray)

// let myArray = ['item1','item2'];
// let newArray = [...myArray,'ram','ramen','shyam']
// console.log(myArray)
// console.log(newArray)
// console.log(myArray==newArray)


// let myArray = ['item1','item2'];
// let ssArray = ['dkdk','dkekekw']
// let newArray = [...myArray,...ssArray]
// console.log(myArray)
// console.log(newArray)
// console.log(myArray==newArray)


