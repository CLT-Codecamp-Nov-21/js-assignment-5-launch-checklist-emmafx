// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   window.addEventListener("load", function() {
       document.getElementById("missionTarget").innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name}</li>
                    <li>Diameter:${json[index].diameter}</li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth:${json[index].distance} </li>
                    <li>Number of Moons:${json[index].moons} </li>
                </ol>
                <img src="${json[index].image}"> 
            `;
});
}

function validateInput(testInput) {
    window.addEventListener("load", function() { 
        let testInput = document.querySelector("testForm");
        form.addEventListener("submit", function (event) {
            /*let pilotNameInput = document.querySelector("input[name=pilotName]");
            let copilotNameInput = document.querySelector("input[name=copilotName]");
            let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
            let cargoMassInput = document.querySelector("input[name=cargoMass]");
            */
        if (testInput.value === "") {
            return "Empty";
        } else if (isNaN() == true) {
            return "Not a Number";
        } else 
            return "Is a Number"
        /*} else if (pilotNameInput.value === !"" || copilotNameInput.value === !"") {
            return "Empty";
            event.preventDefault();
        } else if (isNaN(fuelLevelInput.value) == true || isNaN(cargoMassInput.value) == true) {
            return "Not a Number";
            event.preventDefault();
        } else (isNaN(fuelLevelInput.value) == false || isNaN(cargoMassInput.value) == false) {
            return "Is a Number";
            event.preventDefault();
        }*/
      });
     });
   };
   

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function () {
      // variables for calling <form> input
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
      // variables for calling elements
       let faultyItems = document.getElementById('faultyItems');
       let launchStatus = document.getElementById('launchStatus');
       let fuelStatus = document.getElementById('fuelStatus');
       let pilotStatus = document.getElementById('pilotStatus');
       let copilotStatus = document.getElementById('copilotStatus');

       // make sure all inputs have a string value 
if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
    alert("All field are required!");
    event.preventDefault();
}
    //make sure pilot and copilot names are input as strings 
if (isNaN(pilotName.value) || isNan(copilotName.value)) {
    pilotStatus.innerHTML = 'Pilot ${pilotName.value} is ready';
    copilotStatus.innerHTML = 'Co-pilot ${copilotName.value} is ready';
}
else {
    alert ()
}
}
    /*updatePilotName.innerHTML = `Pilot ${document.querySelector("input[name=pilotName]")} is ready for launch!`;
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
}*/
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
