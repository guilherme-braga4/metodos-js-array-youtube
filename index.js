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
  return (
  "O novo item é " + item * 2 + " e o índice é " + index
  //  item * 2
   )
})

console.log(map3)

//Push

//ForEach

//Slice

//Concat

//Filter

//Find