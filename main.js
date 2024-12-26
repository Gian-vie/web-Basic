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

// let idade = parseInt(prompt("digite sua idade"))
// let titulo = prompt("Você possui titulo? (sim/não)")
// let idadeMinima = 18
// if(idade >= idadeMinima && titulo === "sim"){
//     alert("Você pode votar")
// } else if (idade >= idadeMinima && titulo !== "sim"){
//     alert("Você precisa de um titulo para votar")
// } else {
//     alert("Você não pode votar")
// }

//proj 10 calculadora de porcentagem

// let conta = parseFloat(prompt("valor da conta"))
// let porcent = parseFloat (prompt("porcentagem de gorjeta (em decimal)"))

// let valorTotal = conta + (conta * (porcent / 100))

// alert("valor total da conta é de R$" + valorTotal.toFixed(2))

//proj 14 input de lista no html

// let listaCores = [];

// for(let i = 0; i <= 3; i++){
//     let cor = prompt("cor numero " + (i + 1) + ":")
//     listaCores[i] = cor
// };
// alert('sua lista é' + listaCores);

// document.getElementById('tabelaCores').innerHTML = listaCores

//proj 15 Ul in JS

let numberList = document.getElementById("numberList");

//lista generica
// for(let i = 1; i <= 5; i++){
//    let listItem = document.createElement('li')
//     listItem.textContent = 'item ' + i
//     numberList.appendChild(listItem)
// }

//lista existente

// let listaFrutas = ["banana", "maçã", "abacate", "cenoura", "abobora"]
// for (let i = 0; i <= 4; i++) {
//   let listItem = document.createElement("li");
//   listItem.textContent = "fruta: " + listaFrutas[i];
//   numberList.appendChild(listItem);
// };

// proj 16 basico funções

// function greeting(name) {
//     console.log('Hi' + name)
// }

// function changeColor() {
//     let titleH1 = document.getElementById('title')
//     titleH1.style.color = 'red'
// }

// proj 17 obj (Math) random background color

// let cores = ['red', 'blue', 'yellow', 'green', 'grey']

// function changeColor() {
//     // let bodyColor = document.getElementById('body')
//     let randomColor = cores[Math.floor(Math.random() * cores.length)]
//     //--> gera através do id
//     // bodyColor.style.backgroundColor = cores[Math.floor(Math.random() * 5)]
//     //--> gera direto pelo body
//     document.body.style.backgroundColor = randomColor
// }

// proj 19 random number guess

// let random = Math.floor(Math.random() * 100 )
// console.log(random)
// let tries = 0

// function checkGuess() {
//     let guess = document.getElementById('guess').value
//     let message = document.getElementById('message')
//     tries++

//     if(random == guess){
//         message.innerHTML = 'Acerto miseravi! em ' + tries + ' tentativas';
//     } else if (random > guess){
//         message.innerHTML = 'ta baixo';
//     }else {
//         message.innerHTML = 'ta alto';
//     }
// }

// //exemplo de extrutura diferente
// variavel.addeventlistener('click', function()){
//     Input.value = ''  // limpa o campo
// }

// proj 22 switch/case

// let userNum1 = document.getElementById("userNum1");
// let userNum2 = document.getElementById("userNum2");
// let operator = document.getElementById("operator");
// let calculateButton = document.getElementById("calculate");
// let resultDiv = document.getElementById("result");

// calculateButton.addEventListener("click", function () {
//   let num1 = Number(userNum1.value);
//   let num2 = Number(userNum2.value);
//   let op = operator.value;
//   let result;

//   switch (op) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//       default:
//           result = 'Invalided Operator'
//   }

//   resultDiv.innerHTML = 'The result is ' + result
// });


