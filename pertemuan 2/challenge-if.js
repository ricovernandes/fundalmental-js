const number = prompt('Input a number')

// odd/even - ganjil/genap
// buatlah sebuah logic utk menentukan bilangan ganjil/genap
// kalau bilangan ganjil, console.log('The number is odd!')
// kalau bilangan genap, console.log('The number is even!')

if (number % 2 === 0) {
alert(`${number} is even`)
} else if (number % 2 === 1) {
  alert( `${number} is odd`)
}
else {
  alert(`${number} is not a whole number!`)
}