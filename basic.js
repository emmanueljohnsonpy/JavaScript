



// 1 VARIABLES (Scope, Reassignment, Hoisting, Introduced In)

/* var name1 = "Messi"
let name2 = "Cristiano"
const name3 = "Mbappe" */




// 2 CONDITIONAL STATEMENTS

// if, else, else if

/* let num = 3;
if (num > 0) {
    console.log("Number is Positive")
} else if (num < 0) {
    console.log("Number is negative")
} else { 
    console.log("Number is Zero")
} */

// switch

/* let day = 2
switch (day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4: 
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Select number Between 1 and 7")
} */

// ternary operator

/* let age = 20;
let canVote = age >= 18 ? "You can vote": "You can't vote"
console.log(canVote)
 */



// LOOPS

// for loop

/* for (let i = 0; i <= 5; i++){
    console.log(i)
} */

// while loop

/* i=1
while (i <= 5){
    console.log(i)
    i++
} */

// do while loop

/* i = 1
do {
    console.log(i)
    i++
}while(i <= 5) */

// for in loop

/* const player = {firstName: "Lionel", lastName: "Messi", team: "Argentina"}
for (let i in player){
    console.log(player[i])
} */

// for of loop

/* let arr = [1, 2, 3, 4, 5]
for (let i of arr){
    console.log(i)
} */




// ARRAYS

// let my_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// accessing

/* console.log(my_arr[0])
 */
// array properties

/* console.log(my_arr.length)
 */
// array methods

// new_arr = [10, 20, 30, 40, 50, 60, 70]
// console.log(my_arr)
// console.log(my_arr.push(100))
// console.log(my_arr.pop())
// console.log(my_arr.shift())
// console.log(my_arr.unshift(100))
// console.log(my_arr.concat(new_arr))
// console.log(my_arr.join(", "))
// console.log(my_arr.slice(3, 6))
// console.log(my_arr.splice(1, 3))
// console.log(my_arr.splice(1, 0, 500, 1000, 2000))
// console.log(my_arr.splice(1, 3, 200, 300, 400))
// console.log(my_arr.indexOf(3))
// console.log(my_arr.includes(10))
// my_arr.forEach((i)=>{
//     console.log(i)
// })
// let res = my_arr.map(num => num * num)
// console.log(res)
// let res = my_arr.filter(n => n % 2 != 0)
// console.log(res)
// let res = my_arr.reduce((total, n) => total + n, 0)
// console.log(res)
// let [a, b, ...rest] = my_arr
// console.log(a)
// console.log(b)
// console.log(rest)
// console.log(my_arr)




// FUNCTION

/* function greet(name){
    console.log(`Hai, ${name}`)
}
greet("Messi") */

/* const greet = (name) => `Hai, ${name}`
console.log(greet("Messi")) */




// OBJECT


/* let player = {
    fname: "Lionel",
    lname: "Messi",
    team: "Argentina",
    fullname: function(){
        return this.fname + " " + this.lname
    }
}
console.log(player.fullname()) */




// CLASSES

class Animal{
    constructor(name, type){
        this.name = name
        this.type = type
    }
    makesound(){
        console.log(`${this.name} is making sound`)
    }
}

let dog = new Animal("dog", "mammal")
dog.makesound()
console.log(dog.name)