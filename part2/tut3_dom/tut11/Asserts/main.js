// ----------------------------- keypress event and mouseover event ---------------------------------

// -------- keypress event

// const body = document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e)
//     console.log(e.key)
// })

// ------- mouseover and mouseleave event
let btn_headline = document.querySelector(".btn_headline")
btn_headline.addEventListener("mouseover",()=>{
    console.log("mouseover event occrred !!!")
})
btn_headline.addEventListener("mouseleave",()=>{
    console.log("mouseleave event ocurred !!!")
})
