// //Async js
// //  callbacks , promises, and await

// // what is problem statement.......

// const datas = [
//     {name: "tanishq", profession: "SWE"},
//     {name: "ajay", profession: "Teacher"}
// ]


// function getDatas(){
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data, index)=>{
//             output += `<li>${data.name}</li>`
//             document.body.innerHTML=output
//         })
//     }, 1000);
// }
// /// is method mein ye function pehle run ho rha hai...
// // which is 1 second........

// function createdata(newdata){
//     setTimeout(()=>{
//         datas.push(newdata)
//     },2000)
// }
// /// is method mein ye function, pehle function ke baad run ho rha hai...
// // which is 2 seconds........ 


// // it means doosra function mein jo push kr rha hai.... vo hmko show nhi hoga... because doosra function late load horha hai pehle vaale se....
// // if we increase the time for second function in respect to 1st to object push krva rhe hai....vo hmko show hojega....

// createdata({name:"Vivek",profession: "Teacher" })  //passing data...

// getDatas()



// 1st method: - callbacks

// const datas1 = [
//     {name: "harsh", profession: "SWE"},
//     {name: "ajay", profession: "Teacher"}
// ]


// function getDatas1(){
//     setTimeout(()=>{
//         let output="";
//         datas1.forEach((data)=>{
//             output+= `<li>${data.name}</li>`;
//             document.body.innerHTML=output;
//         })
//     }, 1000) 
// } 

// // now in this we are passing 1st function (which was rendring early) in 2nd function.... now we passed it to 2nd function(passing after pushing newdata and executed it).....and after 3seconds(1+2) we got our data...we solved that thing...

// function createdata1(newData, adddata){
//     setTimeout(()=>{
//         datas1.push(newData)
//         adddata();
//     }, 2000)
// }

// // getDatas1()

// createdata1({name:"vivek", profession:"software dev"}, getDatas1)



//2nd method:- Promises


// const datas2 = [
//     {name: "tanishq", profession: "SWE"},
//     {name: "ajay", profession: "Teacher"}
// ]

// function getDatas2(){
//     setTimeout(()=>{
//         let output="";
//         datas2.forEach((data)=>{
//             output += `<li>${data.name}</li>`
//             document.body.innerHTML= output;
//         })
//     },1000)
// }

// function createdata(newData){
//     return new Promise((resolve,reject)=>{   // isme hm new promise ko return krte hai....
//         setTimeout(()=>{
//             datas2.push(newData)
//             let error=false;   // isko true krke dekho....shayd smjh aaajeee
//             if(!error){
//                 resolve()   // agr koi error nhi hai to resolve
//             }
//             else{
//                 reject("kuch sai nhi hai") //agr hai error to reject 
//             }
//         },2000)
//     })
// }

// createdata({name:"vivek", profession:"software dev"})
// .then(getDatas2)
// .catch(()=>{document.body.innerHTML="noooooo"}) // and agr resolve hai to .then ke andr function ko pass krvado vrna catch mein error msg leave krdo

// //resolve ke liye .then
// //reject ke liye .catch 



// 3rd method:- async and await


const datas3 = [
    {name: "tanishq", profession: "SWE"},
    {name: "ajay", profession: "Teacher"}
]


function getDatas3(){
    setTimeout(()=>{
        let output="";
        datas3.forEach((data)=>{
            output +=`<li>${data.name}</li>`
            document.body.innerHTML=output
        })
    },1000)
}

function createdata(adddata){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datas3.push(adddata)
            let error= false;
            if(!error){
                resolve();
            }
            else{
                reject()
            }
        },2000)

    })
}

async function start(){
    await createdata({name: "harsh", profession:"swe"})
    getDatas3()
}

start();

