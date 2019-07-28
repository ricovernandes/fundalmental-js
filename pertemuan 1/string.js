const sentence = 'ibu pergi beli semangka ke pasar'

// ambil panjang string
console.log(sentence.length)

// ambil posisi index sebuah substring (index dimulai dari 0)
console.log(sentence.indexOf('semangka'))

// ambil substring dari index sekian ke sekian
console.log(sentence.substring(4, 6))

// CHALLENGE: bikin kalimat "beli semangka ke pasar" dari sentence
const kalimatbaru = sentence.substring(sentence.indexOf('beli'), sentence.length)
console.log(kalimatbaru)

// slice string (mirip dgn substring)
console.log(sentence.slice(5, 8))

// includes (nge-return boolean)
console.log(sentence.includes('ibu'))

// split (mengubah string menjadi array)
console.log(sentence.split(''))

// mengubah menjadi huruf kapital
console.log(sentence.toLocaleUpperCase())

// mengubah menjadi huruf kecil
console.log(sentence.toLowerCase())

// mengubah number ke string
const angka = 123456
angka.toString()

// mengubah string ke number
const numberstring = '123456'
console.log(parseInt(numberstring))

// CHALLENGE: '123' + '456'= '579'
const x = '123'
const y = '456'
const xInt = parseInt(x)
const yInt = parseInt(y)
const result = (xInt + yInt).toString()
console.log(result)

// type coercion - string plus number, number berubah jadi string secara otomatis
const number = 123
console.log('ibu memiliki angka' + number)
