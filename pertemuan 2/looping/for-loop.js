// we use "i" variable naming for 'iteration'
//  for (let i = 0; i < 10; i++) {
//   console.log(`${i}hello world`)
//  }

// challenge:
// print angka
// 2, 4 , 6, 8 ,10 , 12 , 14, 16, 18 , 20
// dengan for-loop

for (let i = 1; i <= 10; i++) {
  console.log(`${i * 2}hello world`)
}

// nested if 
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 5; j++){
//     console.log('this is nested if')
//   }
// }

// loop drawing
// let stars = ''
// for (let i = 0; i < 10; i++) {
//   stars += '*\n'
// }
// console.log(stars)

// j utk print horizontal
// i utk print vertical
let box = ''
for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 5; j++) {
    box += '*'
  }
  box += '\n'
}
console.log(box)

let triangle = ''
for (let i = 0; i < 5; i++) {
  for(let j = 0; j <= i; j++) {
    triangle += '*'
  }
  triangle +='\n'
}
console.log(triangle)
