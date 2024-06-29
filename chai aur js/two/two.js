const saydate = function(str){
    console.log(str, Date.now());
}

document.querySelector('#start').addEventListener('click', ()=>{
    var start = setInterval(saydate, 1000,"hi");
})

document.querySelector('#stop').addEventListener('click', ()=>{
    clearInterval(start)
})



