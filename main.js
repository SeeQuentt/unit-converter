const resultsLength = document.getElementById("results-length")
const resultsVolume = document.getElementById("results-volume")
const resultsMass = document.getElementById("results-mass")

const convertBtn = document.getElementById("convert-btn")

const feetToMeters = 20/65.616
const gallonstoLiter = 20/5.284
const poundstoKilograms = 20/44.092


function convert() { 
    const amountIn = document.getElementById("amount").value
    let convertFeet = (amountIn*feetToMeters).toFixed(2)
    let convertMeters = (amountIn*(1/feetToMeters)).toFixed(2)
    let convertGallons = (amountIn*gallonstoLiter).toFixed(2)
    let convertLiters = (amountIn*(1/gallonstoLiter)).toFixed(2)
    let convertPounds = (amountIn*poundstoKilograms).toFixed(2)
    let convertKilograms = (amountIn*(1/poundstoKilograms)).toFixed(2)

    resultsLength.innerHTML = `${amountIn} meters = ${convertMeters} feet | ${amountIn} feet = ${convertFeet} meters`
    resultsVolume.innerHTML = `${amountIn} liters = ${convertLiters} gallons | ${amountIn} gallons = ${convertGallons} liters`
    resultsMass.innerHTML = `${amountIn} kilos = ${convertLiters} pounds | ${amountIn} pounds = ${convertGallons} kilos`

}

convertBtn.addEventListener("click", function() {convert()})