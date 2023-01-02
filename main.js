const resultsLength = document.getElementById("results-length")
const resultsVolume = document.getElementById("results-volume")
const resultsMass = document.getElementById("results-mass")

const convertBtn = document.getElementById("convert-btn")

const feetToMeters = 20/65.616
const gallonstoLiter = 20/5.284
const poundstoKilograms = 20/44.092


function convert() { 
    const amountIn = document.getElementById("amount").value
    let convertFeet = amountIn*feetToMeters
    let convertMeters = amountIn*(1/feetToMeters)
    let convertGallons = amountIn*gallonstoLiter
    let convertLiters = amountIn*(1/gallonstoLiter)
    let convertPounds = amountIn*poundstoKilograms
    let convertKilograms = amountIn*(1/poundstoKilograms)

    console.log(convertFeet)

    resultsLength.innerHTML = `${amountIn} meters = ${convertMeters} feet | ${amountIn} feet = ${convertFeet} meters`
    resultsVolume.innerHTML = `${amountIn} liters = ${convertLiters} gallons | ${amountIn} gallons = ${convertGallons} liters`
    resultsMass.innerHTML = `${amountIn} kilos = ${convertLiters} pounds | ${amountIn} pounds = ${convertGallons} kilos`

}

convertBtn.addEventListener("click", function() {convert()})