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

var cpc = "subscribe"
function two(){
    function one(){
        console.log(cpc)
    }
    one();
}
two()