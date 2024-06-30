const display = document.querySelector(".display")
const numContain = document.querySelector(".num_contain")
// console.log(display)
// console.log(numContain)

numContain.addEventListener("click", (e)=>{
    // console.log(e.target.classList.contains("num"))

    if(e.target.classList.contains("num")){
        display.innerText += e.target.innerText
    }
    if(e.target.classList.contains("result")){
        let result = eval(display.innerText)

        // console.log(result)

        display.innerText = result
    }
    if(e.target.classList.contains("del")){
        display.innerText = ""
    }

    if(e.target.classList.contains("backpace")){
        let value = display.innerText.split("")
        value.pop()
        value= value.join("")
        // console.log(value)
        display.innerText = value
    }

})