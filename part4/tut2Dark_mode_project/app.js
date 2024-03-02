let toggle_btn = document.querySelector(".toggle-btn")
let body = document.body
console.log(body)
toggle_btn.addEventListener("click",()=>{
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode")
        toggle_btn.textContent = "dark-mode"
    }else{
        body.classList.add("dark-mode")
        toggle_btn.textContent = "Light-mode"

    }
})