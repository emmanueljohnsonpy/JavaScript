/* let num = 5
factorial = 1
for (let i = 1; i <= 5; i++){
    factorial *= i
}
console.log(factorial)
 */


/* const arr = [1, 2, 3, 1, 2, 4]
const res = []
for (let x of arr){
    if (res.includes(x)){
        continue
    }
    res.push(x)
}
console.log(res) */


/* const arr1 = [1, 2, 3, 4]
const arr2 = [3, 4, 5, 6]
let res = arr1.filter(i => arr2.includes(i))
console.log(res) */

let x = 12345
let num = String(x)
res = ""
for (let i=num.length-1; i>=0; i--){
    res+=num[i]
}
console.log(res)