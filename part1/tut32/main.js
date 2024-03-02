// ---------------------------- callback function --------------------------------------------------

// function outerfun(callback){
//     console.log('this is outer function')
//     callback('ravi')

// }

// function innerfun(name){
//     console.log('this is innerfun')
//     console.log(`this function create by ${name} `)
// }

// outerfun(innerfun)


// -------------------------- function returning function --------------------------------

// function outerfun() {
//     function returnfun(){
//         console.log('this is return function')
//     }
//     return returnfun
    
// }

// let getfun = outerfun()
// getfun()


// ---------------

// function outerfun() {
//     function returnfun(){
//         return 'this is return function'
//     }
//     return returnfun
    
// }

// let getfun = outerfun()
// console.log(getfun())
