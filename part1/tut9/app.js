// -------------------------------- undefined ----------------------
// let firstName;
// console.log(firstName)


// ------------------------ null ----------------------------------
// let nullVaraible = null
// console.log(nullVaraible)

// note ------- this is javascript bug when we check null data type
// console.log(typeof nullVaraible)


// ------------------------ BigInt -------------------------------

// -------------
// note - we can check use this code maximum range of number we write in javascript
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(1232345446787644556678543)

// ------------- make normal bigint use bigint funcation and write n after numbr
// let myNumber = BigInt(12334433223334443467777)
// console.log(myNumber)
// console.log(typeof myNumber)

// write n in last of number for make normal number to bigint number
let myNumber = 12334433223334443467n
console.log(myNumber)
console.log(typeof myNumber)

