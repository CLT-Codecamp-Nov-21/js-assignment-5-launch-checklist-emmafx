// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   window.addEventListener("load", function() {
       document.getElementById("missionTarget").innerHTML
   });
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    window.addEventListener("load", function() { 
        let form = document.querySelector("testForm");
        form.addEventListener("submit", function (event) {
            let pilotNameInput = document.querySelector("input[name=pilotName]");
            let copilotNameInput = document.querySelector("input[name=copilotName]");
            let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
            let cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            event.stopPropagation();
        } else if (pilotNameInput.value === !"" || copilotNameInput.value === !"") {
            return "Empty";
        } else if (isNaN(fuelLevelInput.value) == true || isNaN(cargoMassInput.value) == true) {
            return "Not a Number";
        } else (isNaN(fuelLevelInput.value) == false || isNaN(cargoMassInput.value) == false) {
            return "Is a Number";
        }
      }
     });
   });
   

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function () {
       let updatePilotName = document.getElementById("pilotStatus");
       let updateCopilotName = document.getElementById("copilotStatus");
       let updateFuelLevel = document.getElementById("fuelStatus");
       let updateCargoMass = document.getElementById("cargoStatus");

    updatePilotName.innerHTML = `Pilot ${document.querySelector("input[name=pilotName]")} is ready for launch!`;
    updateCopilotName.innerHTML =  `Copilot ${document.querySelector("input[name=copilotName")} is ready for launch!`;

let newHeader = document.getElementById("launchStatus");

if (document.querySelector("input[name=fuelLevel]") < 10000) { 
    updateFuelLevel.innerHTML = `Fuel Level too low for launch`;
    document.getElementById("launchStatus").style.color = "red";
    newHeader.innerHTML = "Shuttle Not Ready for Launch";
} else if (document.querySelector("input[name=cargoMass") > 10000) {
    updateCargoMass.innerHTML = `Cargo mass too heavy for launch`;
    document.getElementById("launchStatus").style.color = "red";
    newHeader.innerHTML = "Shuttle Not Ready for Launch";
} else {
    document.getElementById("launchStatus").style.color = "green";
    newHeader.innerHTML = `Shuttle is ready for Launch!`;
}
 });
    }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();

 });
    

    return planetsReturned;
}

function pickPlanet(planets) {
    //using math.random return one planet from the list with a random selected index.
    let randomPlanet = Math.floor(Math.random() * json.length);
    console.log(json[randomPlanet].name);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
