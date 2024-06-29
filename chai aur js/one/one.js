
const sayHello = function(){
    console.log("hello")
}

const AftertwoSeconds = function(){
    document.querySelector('h1').innerHTML="best js series"
}

const changeme = setTimeout(AftertwoSeconds,2000) 


document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeme)
})