// let firstName = prompt('digite seu primeiro nome')
// let greeting = "Hello "
// let lastName = prompt('digite seu sobrenome')
// let age = parseInt(prompt('digite sua idade'))

//ptoj 5

// let firstName = prompt('digite seu primeiro nome')
// let greeting = "Hello "
// console.log(`idade ${age}`)
// document.getElementById('greeting').innerHTML = greeting + firstName


//proj 6 array

// let friends = ['ana', 'bruno', 'julia', 'bela']

// console.log(friends[1])
// friends[1] = 'bruuuunin'//replace
// console.log(friends[4])
// friends[4] = 'junin'//add item


//proj 7 calculadora C° --> F°


// let celcius = 0
// let fahrenheith = 0

// celcius = parseFloat(prompt('temperatura em celcius'))
// fahrenheith = celcius * 1.8 + 32

// alert("a temperatura em farhenheith é de " + fahrenheith.toFixed(2))

//proj 8 conversor nota

// let nota = parseInt(prompt("digite sua nota"))
// if(nota > 100){
//     alert('Nota Invalida')
// } else if(nota >= 90){
//     alert('Sua nota é A')
// } else if(nota >= 85){
//     alert('Sua nota é B')
// } else if(nota >= 80){
//     alert('Sua nota é C')
// } else if(nota >= 70){
//     alert('Sua nota é D')
// } else if(nota >= 60){
//     alert('Sua nota é E')
// }else if(nota >= 0){
//     alert('Sua nota é f')
// } else {
//     alert('Nota Invalida')
// }


// proj 9 confirmação de eleitor

let idade = parseInt(prompt("digite sua idade"))
let titulo = prompt("Você possui titulo? (sim/não)")
let idadeMinima = 18
if(idade >= idadeMinima && titulo === "sim"){
    alert("Você pode votar")
} else if (idade >= idadeMinima && titulo !== "sim"){
    alert("Você precisa de um titulo para votar")
} else {
    alert("Você não pode votar")
}
