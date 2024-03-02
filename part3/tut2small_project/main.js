let body = document.documentElement
let button = document.querySelector("button")
console.log(body)
let a = setInterval(() => {
    let red = Math.floor(Math.random()*126)
    let green = Math.floor(Math.random()*126)
    let blue = Math.floor(Math.random()*126)
    let rgb = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = rgb
}, 1000);

button.addEventListener("click",()=>{
    clearInterval(a);
    button.textContent = body.style.backgroundColor
})