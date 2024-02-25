// console.log(window)

// window.console.log("hi")

// window.addEventListener("resize", ()=>{
//     console.log("resized")
// })

// console.log(document.body)

// console.log(document.documentElement)

// const element = document.createElement("span")
// element.innerText="hello world"
// document.body.appendChild(element)

// const divWithid= document.getElementById("div-id")

// divWithid.style.color="red"


// const divswithclass = document.getElementsByClassName("div-class")
// console.log(divswithclass) 
// const divClassArray= Array.from(divswithclass)

// divClassArray.forEach(div=>(div.style.color="green"))

// divswithclass[0].style.color="green"
// const divWithAttribute= document.querySelector("[data-test]")
// console.log(divWithAttribute)

// const divwithid = document.querySelector("#div-id")
// console.log(divwithid)

// divWithAttribute.style.color="red"

// const divswithclass=document.querySelectorAll(".div-class")

// divswithclass.forEach(div=>(div.style.color="red"))

// function printclick(){
//     console.log("clicked")
// }
// const btn = document.querySelector("[data-btn]")
// btn.addEventListener("click", ()=>{
//     console.log("clicked")
// })

// btn.addEventListener("click", ()=> {
//     console.log("clicked 2")
// })

// btn.addEventListener("click",printclick)

// const inputbtn= document.querySelector("[data-input]")

// inputbtn.addEventListener("change", e=>{
//     console.log(e.target.value===" ")
// })

// const divform= document.querySelector("[data-form]") 

// divform.addEventListener("submit", e=>{
//     e.preventDefault()
//     console.log("submitted form")
// })


// const divWithAnchor= document.querySelector("[data-anchor]")

// function printclick(){
//     console.log("clicked")
// }

// divWithAnchor.addEventListener("focus", e=>{
//     e.preventDefault()
//     console.log("clicked")
// })


// const test= document.querySelector("[data-test]")

// const test = document.querySelector("[data-test]")

// console.log(test.dataset.testTwo)

// test.dataset.test='5555'

// const buttons= document.querySelectorAll("button")

// buttons.forEach(button =>{
//     button.addEventListener("click", ()=>{
//         const currentClicks =parseInt(button.dataset.clicks)

//         button.dataset.clicks=currentClicks+1
//     })
// })

