let firstName = prompt('digite seu primeiro nome')
let greeting = "Hello "
// let lastName = prompt('digite seu sobrenome')
// let age = parseInt(prompt('digite sua idade'))

let friends = ['ana', 'bruno', 'julia', 'bela']

console.log(friends[1])
friends[1] = 'bruuuunin'//replace
console.log(friends[4])
friends[4] = 'junin'//add item

// console.log(`idade ${age}`)
document.getElementById('greeting').innerHTML = greeting + firstName