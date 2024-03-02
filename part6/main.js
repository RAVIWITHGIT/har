// ----------------------*************** decorator function  *********************----------------

// function decorator(func){
//     return function (){
//         console.log("you are calling decorator")
//         func()
//     }
// }

// function hello(){
//     console.log("hello ravi")
// }

// const decoratorHello = decorator(hello)
// decoratorHello()


// --------------
// function decorator(func){
//     return function (...args){
//         console.log("you are calling decorator",func.name)
//         func.call(this,...args)
//     }
// }

// function hello(name){
//     console.log(`hello ${name}`)
// }

// const decoratorHello = decorator(hello)
// decoratorHello("ravi")


// -----------------******************* debounceing function **************------------------------
/*
 debounceing do tareeke keee hotee hai
1.  trailing debouncing
2. 1leading debouncing
*/


// --> 1. trailing debouncing 

// function debounceing(func,delay){
//     let timeoutid;
//     return function (...args){
//         if(timeoutid){
//             clearTimeout(timeoutid)
//         }
//         timeoutid = setTimeout(() => {
//             func.call(this,...args)
            
//         }, delay);
//     }

// }

// const myinput = document.querySelector('#myinput')

// function findsuggestions(e){
//     console.log("suggestion for ",e.target.value);

// }

// const decorateFindSuggestion = debounceing(findsuggestions,300)
// myinput.addEventListener("input",decorateFindSuggestion)


// --> leading debouncing

// function leadingDebouncing(func,delay){
//     let timeoutid = null;
//     return function(...args){
//         if(timeoutid===null){
//             func.call(this,...args);
//         }
//         clearTimeout(timeoutid);
//         timeoutid = setTimeout(() => {
//             timeoutid = null
//             console.log('set timeout')
            
//         }, delay);
//     }

// }




// const addCart = document.querySelector('.addCart')

// function clickMe(){
//     console.log("added to cart")
//     console.log("hello")
// }


// const debouncePrintvalue = leadingDebouncing(clickMe,500)
// console.log(debouncePrintvalue)


// addCart.addEventListener('click',debouncePrintvalue)


// ---> Leading + trailing debouncing 

function debounce(func,delay,option = {leading:false,trailing:true}){
    let timeout = null;
    return function(...args){
        let isInvoked = false;
        if(timeout===null && option.leading){
            func.call(this,...args);
            isInvoked = true;
        }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if(option.trailing && !isInvoked){
                func.call(this,...args)
            }
            timeout = null;
        }, delay);
    }

}

function clickMe(){
    console.log("added to cart")
}

const addCart = document.querySelector('.addCart')

addCart.addEventListener('click',debounce(clickMe,500,option={leading:false,trailing:true}))