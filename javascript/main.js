// // function hello(){
// //     alert("HI MY Name IS Prerana Gurung")
// // }

// // let a = 5;
// // let b = "5";
// // console.log(a==b);
// // console.log(a===b);

// console.log (greet("ram"));

// function greet(name){
//     return "Hello, "+name +"!"
// }

// console.log(greet("shyam"));


// const greet2 = function(name){
//     return "Hello," +name+ "!"
// }

// console.log(greet2("ram"));

// //arrow function

// const greet3 = (name)=>{
//     return "hello," +name+ ""
// }

// console.log(greet3("Barsha"));

// const greet4 = name =>"hellow " + name+ ""
// console.log(greet4("Shriya"));

//  function sum(...num){
//     let total = 0;
//     for (let i of num){
//         total += i;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 5))

// let user = {
//     name: "Ram",
//     age: 23
// }
// const{name} = user
// // console.log(user.name)
// // console.log(user.age)

// const btn = document.querySelector("btn1");

// btn.addEventListener('click', function(){
//     alert('Button Clicked')
// }

const button = document.querySelectorAll(".multiplebtn");

button.innerHTML = "Hello world"
button.addEventListener('click', function(){
    alert("this is a button");
})
