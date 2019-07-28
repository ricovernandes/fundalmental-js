// switch case menerima keyword utk dibandingankan (number/string)

const job = 'Doctor'

switch (job) {
  case 'Programmer':
    console.log('You make great applications out of code')
    break
  case 'Doctor':
  case 'Dokter':
      console.log('You heal the sick ones')
    break
  case 'Chef':
      console.log('You cook delicious and irresistable food')
    break
    default:
      console.log('What do you do?')
}