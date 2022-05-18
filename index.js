//Map
const arr = []
const arrFill = [1,2,3]

console.log(arr)
console.log(arrFill)

//----> Modo 1
const map1 = arrFill.map(function Teste (item) {
  return item * 2
})

console.log(map1)

//----> Modo 2
function Teste2 (numero) {
  return numero * 2
}

const map2 = arrFill.map(Teste2)

console.log(map2)

//----> Modo 3
arrFill.map((item, index) => item * 2)

//OU

const map3 = arrFill.map((item, index) => 
{
  if (index == 0) {
  return (
  "O novo item é " + item * 2 + " e o índice é " + index
   )
  }
  else {
    return console.log("Não encontrei")
  }
}
)

console.log(map3)

//Push

const arrA = ["gui", "dev"]

const arrB = ["youtuber", "programador"]

console.log(arrA, arrB)

// const testePush = arrB.map((item) => arrA.push(item))
const testePush = arrA.push(1, 2, 3, true)

console.log(testePush) //Retorno do método modificado
console.log(arrA) //Array modificado

//Problema Comum
let arrayVazio = []
if (arrA.length > 0) {
  const pessoa = {nome: "Guilherme", idade: 21}
  arrayVazio.push(pessoa)
}

console.log(arrayVazio)

//ForEach

//Slice

//Concat

//Filter

//Find