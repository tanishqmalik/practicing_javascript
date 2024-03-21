"use strict";


// var myvar =9;

// for(var i=0; i<=4 ; i++){
//     var n= 78;
// }
// console.log(i)

// {
//     let i =76;
//     {
//         console.log(i)
//     }
// }

// hoisting();

// function hoisting(){
//     var cpc=1;
//     console.log(cpc);
//     cpc=1;
// }



// function hello(){
//     var cpc ="subscribe";
//     bye();

//     function bye(){
//         console.log(cpc);
//     }
// }

// hello();

// var cpc = "subscribe"
// function two(){
//     function one(){
//         console.log(cpc)
//     }
//     one();
// }
// two()

// setTimeout(()=> {
//     console.log("hi")
// },1000)

// const button = document.querySelector('.button')

// button.addEventListener('click', ()=>{
//     console.log("clicked")
// })

// console.log("outside")


// const button = document.querySelector("button");

// function addClickEventListener(element,callback){
//     element.addEventListener("click", callback);
// }

// addClickEventListener(button, ()=>{
//     console.log("clicked")
// })

// setTimeout(()=>{
//     console.log("hi")
//     setTimeout(()=>{
//         console.log("hi 2")
//     },1000)
// }, 100)




// const promise = new Promise((resolve,reject)=>{
//     const sum = 1+1;

//     if(sum === 2){
//         resolve("Success")
//     }
//     else{
//         reject("error")
//     }
// })

// promise
//     .then(message =>{
//         console.log(message)
//     }) 
//     .catch(message =>{
//         console.error(message);
// })
// setTimeout(()=>{
//     console.log("here");
// },250);

// function setTimeoutPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("here");
//         }, 250)
//     })
// }
// const good = Boolean(true);
// console.log(good)




// const promise1 = new Promise((resolve,reject)=>{
//     const good= Boolean(true);
//     if(good==true){
//         console.log('okay')
//     }
//     else{
//         console.log("no")
//     }
    
// })
// promise1.catch(value=>{
//     console.log(value);
// })
// promise1.catch(value =>{
//     console.error(value); 
// });


// setTimeoutPromise()

// console.log("!")

// function setTimeoutPromise(delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('you waited ${delay} milliseconds')
//         },delay)
//     })
// }

// async function dostuff(){
//      const message=await setTimeoutPromise(250)
//      console.log(message);
//      console.log("1")
    
//      const message2= await setTimeoutPromise(1050)
//      console.log(message2)
//      console.log("2")
     
// }
// dostuff()


function getvaluewithDelay(value,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value)
        }, delay)
    })
}
function getvaluewithDelayError(value,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Error");
        },delay);
    })
}

async function twice(){
    try{
        const message= await getvaluewithDelay( (e=>{
            console.log("hello");
        }),250)

        const message2= await getvaluewithDelay("happy",250)
        console.log(message2);
    }
    catch (e){
        console.error(e)
    }
    finally{
        console.log("finally")
    }
}

twice();