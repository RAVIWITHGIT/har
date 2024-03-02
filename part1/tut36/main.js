// --------------------------------------- Set() -------------------------------------------

/*
1. set is same as list becasue set also store data like array
2. we can not store duplicate value in set()
3. syntex is - new Set()
4. we can not access set value using index number
5. we can write iterable object in set , exa - array ,string
*/

// ------************ we can store diffrent data type in set
let mySet = new Set([1,2,3,4])
// let mySet = new Set('ravi')
// console.log(mySet)
// console.log(typeof mySet)


// ------********* we can only iterable object write in set()
// let mySet2 = new Set(1,2,3,4)
// console.log(mySet2)

// ------********* we can not access set value using index number
// let mySet3 = new Set([1,2,3,4])
// console.log(mySet3[1])

// ------********* we can not write duplicat value in set()
// let mySet4 = new Set([1,2,3,1,5,6,4,3,2,8,7,9,1,1])
// console.log(mySet4)

// -----********* we can make empty set and add value using add method
// let mySet5 = new Set()
// mySet5.add(1)
// mySet5.add(2)
// mySet5.add(3)
// console.log(mySet5)

// ------****** we can not add same array multiple time
// let myarr = [1,2,3,4,5]
// let mySet6 = new Set()
// mySet6.add('ravi')
// mySet6.add(myarr)
// mySet6.add(myarr)
// console.log(mySet6)

// -----***** we can add same array in Set multiple time if all array id is not same
// let myarr1 = [1,2,3,4,5,6]
// let myarr2 = [1,2,3,4,5,6]
// let myarr3 = [1,2,3,4,5,6]
// let mySet7 = new Set()
// mySet7.add('hello')
// mySet7.add(myarr1)
// mySet7.add(myarr2)
// mySet7.add(myarr3)
// console.log(mySet7)


//-----
// let mySet8 = new Set()
// mySet8.add('hello')
// mySet8.add([1,2,3,4,5,6])
// mySet8.add([1,2,3,4,5,6])
// mySet8.add([1,2,3,4,5,6])
// console.log(mySet8)

// ------*************** check element present in set using has method
// let mySet9 = new Set([1,2,3,4,'ravi'])
// console.log(mySet9.has(1))
// console.log(mySet9.has('ravi'))

// -----************* we can iterate Set element using loop
// let mySet10 = new Set([1,2,3,4,'ravi'])
// for(let i of mySet10){
//     console.log(i)
// }

// -----************ we can not access length of set using length properties but we can use size method to access how many element present in set
// let mySet11 = new Set([1,2,3,4,'shiv'])
// console.log(mySet11.length)
// console.log(mySet11.size)


//-------------------------------------- Maps -------------------------------------------------------

/*
1. just as the object store key value pair , the map also stores the key values pair
2. the key of the object may be of any type but it is automatically converted into a string 
3. we can write key of any data type in map , but key does not convert to string
4. we can not use for of loop in object but we can use for of loop in map

*/

// ------------******* before starting map repeat of object
// let myobj = {
//     name:'ravi',
//     age:21,
//     1:true
// }
// for (let i in myobj){
//     console.log(typeof i)
// }

// -----------------****************** let's start the map
let myMap = new Map()
myMap.set('name','ravi')
myMap.set('age',21)
myMap.set(1,true)
myMap.set([1,2,3,4],'myArr')
myMap.set({'from':'jaipur'},'myObj')
console.log(myMap)

//------ we can use for of loop in map

// for(let i of myMap){
//     console.log(i)
// }

// ------- access key 
// let getKey = myMap.keys()
// console.log(getKey)
// for(let i of myMap.keys()){
//     console.log(typeof i)
// }

//-------- access value
// let getValue = myMap.values()
// console.log(getValue)

// ------ second method create a map
// let myMap2 = new Map([
//     ['name','ravi'],
//     ['age','21'],
//     [1,true],
// ])
// console.log(myMap2)


// ------ access key in map , we can not access value like object , use .get(keyName)  method using acess value  
// let myMap3 = new Map([
//     ['name','ravi'],
//     ['age','21'],
//     [1,true],
// ])


// console.log(myMap3.get('name'))
// console.log(myMap3.get(1))

//-----------******* REAL LIFE EXAMPLE
let person1 = {
    id:1,
    firstName:'ravi'
}
let person2 = {
    id:2,
    firstName:'shiv'
}
let newMap = new Map()
newMap.set(person1,{age:21,from:'jaipur'})
newMap.set({age:22,from:'bassi'},person2)
// console.log(newMap)
// console.log(newMap.get(person1).age)


//---------
// let mykey = newMap.keys()
// console.log(mykey)
// console.log(mykey.next().value)
// console.log(mykey.next().value)


