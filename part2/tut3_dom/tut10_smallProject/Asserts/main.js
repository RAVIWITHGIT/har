let h1 = document.querySelector('h1')
let btn = document.querySelector("button")
btn.addEventListener('click',(event)=>{
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    document.body.style = `background-color:rgb(${red},${green},${blue});`
    h1.innerText = `rgb(${red},${green},${blue})`

})