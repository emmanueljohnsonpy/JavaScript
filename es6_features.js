

// map

/* const numbers = [1, 2, 3, 4, 5]
let x = numbers.map(n => n * n)
console.log(x) */

// filters

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let x = numbers.filter(n => n % 2 == 0)
console.log(x) */

// reduce

/* const numbers = [1, 2, 3, 4, 5]
let x = numbers.reduce((total, n) => total + n, 0)
console.log(x) */

// spread

"Copying Arrays:"

/* const arr1 = [1, 2, 3]
let x = [...arr1]
console.log(x) */

"Combining Arrays:"

/* const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
let x = [...arr1, ...arr2]
console.log(x) */

"Expanding Arrays in Function Calls:"

/* const arr = [1, 2, 3]
const sum = (a, b, c) => a + b + c
console.log(sum(...arr)) */

"Copying or Merging Objects:"

/* const obj1 = {a: 1, b: 2}
const obj2 = {c: 3}
let x = {...obj1, ...obj2}
console.log(x) */

"REST OPERATOR"

/* let sum = (...numbers) => numbers.reduce((total, n) => total + n, 0)
console.log(sum(1, 2, 3, 4, 5)) */

"array destructing"

/* const numbers = [1, 2, 3, 4, 5]
let [a, ...rest] = numbers
console.log(a)
console.log(rest) */

"object destructing"

/* const numbers = {a: 1, b: 2, c: 3}
let {a, ...b} = numbers
console.log(a)
console.log(b) */

"TERNARY OPERATOR"

/* let age = 19
let res = age >= 18 ? "Adult": "Minor"
console.log(res) */

"OPTIONAL CHAINING"

/* const user = {name: "Messi", address: {city: "Argentina"}}
console.log(user?.name) */

"CALL BACK FUNCTIONS"

function greet(name, callback){
    console.log(`Hello, ${name}`)
    callback()
}
greet("Mbappe", () => console.log("haii"))