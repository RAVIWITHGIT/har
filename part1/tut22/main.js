// ------------------------- spread operator in object ----------------------------
// const arrar1 = [1,2,3]
// const arrar2 = [5,6,7]

// const narray = [...arrar1,...arrar2,'ravi','ram','shyam']
// console.log(narray)


// ------------------ iterator string using spread operator
// let narray = [..."ravi"]
// narray = [..."1234567890"]
// console.log(narray)


// ----------------- spread operator in object
// let obj1 = {
//     name:'ravi',
//     age:21,
//     from:'jaipur'
// }

// let obj2 = {
//     key1:'value1',
//     key2:'value2',
//     key3:'value3'

// }
// let newobj = {...obj1,...obj2}
// console.log(newobj)


// ------ if we add two object in new object using spread operator and obj1 and obj2 some key same then obj2 key overwrite obj1 key in new object

// overwrite obj2 key in obj1
// let obj1 = {
//     name:'ravi',
//     age:21,
//     from:'jaipur'
// }

// let obj2 = {
//     name:'shiv',
//     age:22,
//     from:'bassi'

// }
// let newobj = {...obj1,...obj2}
// console.log(newobj)

// ------
// let obj1 = {
//     name:'ravi',
//     age:21,
//     from:'jaipur'
// }

// let obj2 = {
//     key1:'value1',
//     key2:'value2',
//     key3:'value3'

// }
// let newobj = {...obj1,...obj2,key56:'myvalue'}
// console.log(newobj)

// ------ set key value of string using spreador operator
// let newobj = {..."ravi"}
// console.log(newobj)

// ------ set array value as key value using spreador oprator
// let newobj = {...['ravi','shiv']}
// console.log(newobj)


// --------------------------------- object destructuring --------------------------------------
// const info = {
//     name:'ravi',
//     age:21,
//     from:'jaipur',
//     hobbie:'coding'
// }

// let {name,age,from,hobbie} = info
// console.log(name,age,from,hobbie)


// -------- change key varaible name
// const info = {
//     name:'ravi',
//     age:21,
//     from:'jaipur',
//     hobbie:'coding'
// }

// let {name:myname,age:age1,from,hobbie} = info
// console.log(myname)
// console.log(age1)
// console.log(from)
// console.log(hobbie)




