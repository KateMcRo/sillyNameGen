var randomizeBtn = document.querySelector("#randomize");


// Variables (first, last, sillyName)
var firstName = ["Basketball ", "Boulevard ", "Bandana ", "Biblical ", "Buttondown ", "Bronchitis ", "Bottomless ", "Badminton ", "Barnacle ", "Bystander "]
var lastName = ["Cucumber", "Cabala", "Cathedral", "Chancellor", "Companion", "Commonwealth", "Customer", "Counterpart", "Corridor", "Celibate"]

var sillyName = ""
var chosenFirst
var chosenLast

const sillyNameEl = document.getElementById("sillyName")


// Functions (randomize selections, add together, return/print)
function writeName () {
    sillyName = ""
    randomFirst ()
    randomLast ()
    newName ()
    sillyNameEl.innerText = sillyName   
}

function newName () {
    sillyName = chosenFirst += chosenLast
    return sillyName
}

// Functions to randomize selects
function randomFirst () {
    var randomizeFirst = Math.floor(Math.random() * firstName.length)
    var index = randomizeFirst
    chosenFirst = firstName[index]
    return chosenFirst   
}

function randomLast () {
    var randomizeLast = Math.floor(Math.random() * lastName.length)
    var index = randomizeLast
    chosenLast = lastName[index] 
    return chosenLast  
}

// Event listener
randomizeBtn.addEventListener("click", writeName)