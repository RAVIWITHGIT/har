// -------------------- classList,add,remove,toggle class -------------------------------------------

let nav = document.querySelector('nav')

/* ------->>>> classList 
1. classlist is properties of selected element
2. you can see all property using console.dir(selectElement)
3. if you want check how many class present select element then we use classList
*/
// console.dir(nav)
// console.log(nav.classList)
// console.dir(nav.classList)


/* ------->>>>>> add
1. classList return DOMTokenList and add() method present this DOMTokenList class
2. add() method help add class using javascript

*/

// nav.classList.add('className')


/* ------->>>>>> remove()
1. remove method also present DOMTokenList 
2. remove() method remove class in any element of html
*/

// console.log(nav.classList)
// nav.classList.remove('mynav')
// console.log(nav.classList)


/* -------->>>>>>> toggle()
1.  toggle method also present DOMTokenList 
2.  adding a new class or if class is present then removing the existing classes.

*/

//---- add dark class , if not present
// nav.classList.toggle('dark')

// --- remove dark class , if class is present
// nav.classList.toggle('dark')

