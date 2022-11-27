console.log('Hello Word JS!')

// console
console.error('Este é um erro!')
console.warn('Este é um aviso!')
console.log('Este é uma mensagem!')

// variaveis
var x = 10
// maneiras mais modernas
// este seria um escopo global para o código, se não tiver if assume este valor
let y = 15
const z = 20

// este seria um escopo local
if (1) {
    let y = 55
    console.log(y)
}


console.log(x)
console.log(y)
console.log(z)


// atribuição de valores a variáveis

y = 25

console.log(y)

// tipos de dados
//dado em texto
const name = 'Ana'
console.log(name)
console.log(typeof name)

//dado numérico
const shirtsQty = 4
console.log(shirtsQty)
console.log(typeof shirtsQty)

//dado numérico decimal
const decimal = 12.4
console.log(decimal)
console.log(typeof decimal)

// boolean - true or false, verdadeiro ou falso
const isApproved = false
console.log(isApproved)
console.log(typeof isApproved)

// null = nulo, declar-se a variável nula para entender que ainda não possui valor mas que ao longo do código irá receber valor
let surname = null
console.log(surname)
console.log(typeof surname)

// 
surname = 'Ana'
console.log(surname)
console.log(typeof surname)

// undefined - indefinido
let age
console.log(age)
console.log(typeof age)

// declarando valor
age = 30
console.log(age)
console.log(typeof age)

// array - listas
const languages = ['JavaScript', 'PHP', 'Python']
console.log(languages)
console.log(typeof languages)

// object literals - objeto
const user = { email: 'ana@teste.com', password:'teste123', age: 30 }
console.log(user)
console.log(typeof user)

// métodos de string
const fullName = 'Ana Albano'

console.log(fullName.length)

const stringToArray = fullName.split(' ')

console.log(stringToArray)

console.log(fullName.toLocaleLowerCase())

console.log(fullName.toLocaleUpperCase())

console.log(fullName.indexOf('Albano'))

console.log('lkdjffoh'.indexOf('Albano'))

console.log(fullName.slice(0, 7))

// métodos de arrays
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length)