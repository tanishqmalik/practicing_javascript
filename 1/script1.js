// const a =[1,2,3,4,5]
// const b= [2,4,6,8,10]

// a.forEach((number,index) => {
//     console.log(number,index)
// })

// const newa = b.reduce((sum, number) => {
//     return sum + number;
// }, 0 )

// console.log(newa)



// const items =[
//     {price: 10},
//     {price: 20},
//     {price: 14},
//     {price: 1},
//     {price: 6},
// ]

// const total = items.reduce((sum, item) => {
//     return sum + item.price
// })
// let a="hello"
// let b ="world"

// console.log(`${a} ${b}`);

// let a = "Tanishq"
// let b ="Malik"

// console.log(`${a} ${b}`)

// function createUser(name,age){
//     return{name: name, age: age, human: true}
// }

// function User(name, age){
//     this.name = name
//     this.age = age 
//     this.human=true
// }

// const user1 = new User("tanishq", 25)
// console.log(`${user1.name} and age is ${user1.age}`)
// const user = createUser('kyle',25)
// console.log(user)
// const date = new Date()
// console.log(date.getFullYear())

// console.log(User)

// class User{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//         this.human=true
//     }
// }


// const user1 = new User("tanishq", 25)
// console.log(user1)

// const a=  new Date();
// console.log(a)

// console.log(window)
// window.console.log()

// alert('hi')
// const alert ="message"
// window.addEventListener("resize", ()=>{
//     console.log("resized")
// })



// var a = 25.7;
// // Math.abs();

// console.log(Math.PI);
// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(Math.floor(a));
// console.log(Math.trunc(a))

// **arrays**

// -stores data in sequential manner
// stores every type of data regardless what u store in it 


// const arr=[]
// arr[99]=100;
// console.log(arr.length)

// // size is dynamic......

// console.log(arr[-1])

// console.log( arr[1],arr.toString)


// const arr=[11,22,33,44,55];

// for(i of arr){
//     console.log(i)    //values
// }

// for(i in arr){
//     console.log(i)    //indexes 
// }


// for(i of [11,22,33,44,55]){
//     console.log(i)    //values
// }

// for(i in arr){
//     console.log(i)    //indexes 
// }

// **arrays method**


// const arr =[1,2,3,4,5];
// const arr2= arr;

// arr2[0]=99;

// console.log(arr[0])


// arrays methods/functions


// const arr=[1,2,3,4,5]
// arr.fill(99)   // all elements will be 99
// console.log(arr)

// const arr=[1,2,3,4,5]
// arr.fill(99,2,10)   // all elements will be 99 (filling value, starting index, ending values)
// console.log(arr)
// console.log(arr.length)


// const arr =[1,2,3,4,5]
// // arr.push(123)  //insert 
// arr.pop();  //remove
// console.log("popped ele: ", arr.pop())
// console.log(arr)


// const arr =[1,2,3,4,5]
// arr.unshift(123)  //insert the value at the begining of the array 
// console.log(arr)
// console.log("popped ele: ", arr.shift())
// console.log(arr)

// shift // removes and returns the value at the end of the array


// const arr=[1,2,3,4,5,2,1]

// console.log(arr.indexof(2))
// console.log(arr.lastindexof(2))

// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9,10];

// const newmergedarray =arr1.concat(arr2)

// console.log(newmergedarray);

// console.log((arr1+arr2)[2])

// function declaration


// const  myfunction =  function(){
//     for( var i=0; i<5; i++){
//         console.log("hi")
//     }
// }
// // function call
// myfunction();


// arrow function


// const myfunction=()=>
// {
//     for( var i=0; i<5; i++){
//         console.log("hi")
//     }
// }
// // function call
// myfunction();



// function myfunction1(){
//     console.log("function1")
// }

// function function2()
// {
//     console.log("function2")
// }

// const myfunction3 =()=>{
//     console.log("function3")
// }

// (()=>{
//     console.log("self-InvolkingFunction")
// })();


// const arr1=[1,2,3,4,5];

// function myfunction(value){
//     return value*2;
// }

// const newmappedarray=arr1.fill(myfunction);

// console.log(newmappedarray);



// const arr1=[1,2,3,4,5];

// function myfunction(value){
//     return (value%2==0);
// }

// const newmappedarray=arr1.filter(myfunction);

// console.log(newmappedarray);

// javascript object

//  javascript storing data as key-value pairs

// > key must be unique
// > value cann be duplicate

// const student ={
//     name: 'rudraksh',
//     age: 20,
//     isMale:true,
//     // shakesHand: ()=>{}
//     shakesHand: function(){
//         console.log("Rudraksh is not paying attention");
//     }
// };

// student.watching ='vindland saga'
// // . memberShip Operator
// console.log(student.name);
// console.log(student['age'])
// student.shakesHand();


// console.log(student)


// ... spread operator

// const student2={...student};
// student2.name='Not_rudraksh'
// console.log(student.name)


