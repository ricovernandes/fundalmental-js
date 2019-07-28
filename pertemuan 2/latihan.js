const mass = prompt('massa(kg)?')
const height = prompt('tinggi(meter)?')
const IMT = mass / Math.pow(height, 2)

if ( IMT < 18.5){
alert (`berat badan kurang`)
} else if(IMT >= 18.5 && IMT <= 24.9) {
alert (`berat badan ideal`)
} else if (IMT >= 25.0 && IMT <= 29.9) {
alert (`berat badan berlebih`)
} else if (IMT >= 30.0 && IMT <= 39.9) {
alert (`berat badan sangat berlebih`) 
} else 
alert (`obesitas`)








