var randomizeBtn = document.querySelector("#randomize");


// Variables (first, last, sillyName)
var firstName = ["Basketball ", "Boulevard ", "Bandana ", "Biblical ", "Bahamas ", "Bronchitis ", "Bottomless ", "Badminton ", "Barnacle ", "Bystander "]
var lastName = ["Chipotle", "Cabala", "Cathedral", "Chancellor", "Companion", "Commonwealth", "Customer", "Counterpart", "Corridor", "Celibate"]

var sillyName = ""

// Functions (randomize selections, add together, return/print)
function writeName () {
    randomFirst ()
    randomLast ()
      
}

function firstPick () {


}

// Functions to randomize selects
function randomFirst () {
    var randomizeFirst = Math.floor(Math.random() * firstName.length)
    var index = randomizeFirst
    var chosenFirst = firstName[index] 
    console.log(chosenFirst)   
}

function randomLast () {
    var randomizeLast = Math.floor(Math.random() * lastName.length)
    var index = randomizeLast
    var chosenLast = lastName[index] 
    console.log(chosenLast)    
}

// Event listener
randomizeBtn.addEventListener("click", writeName)