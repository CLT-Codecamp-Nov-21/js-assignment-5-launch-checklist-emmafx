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
       
         if (testInput.value === "") {
            return "Empty";
        } else if (isNaN() == true) {
            return "Not a Number";
        } else 
            return "Is a Number"; 
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
       let cargoStatus = document.getElementById('cargoStatus');
       let copilotStatus = document.getElementById('copilotStatus');

       // make sure all inputs have a string value 
if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
    alert("All field are required!");
    event.preventDefault();
}
    //make sure pilot and copilot names are input as strings 
if (validateInput(pilotName.value) || validateInput(copilotName.value) === "Not a Number") {
    pilotStatus.innerHTML = 'Pilot ${pilotName.value} is ready';
    copilotStatus.innerHTML = 'Co-pilot ${copilotName.value} is ready';
}
else {
    alert ("Names must not have integers!");
}
    //check and make sure fuel levels are a number. 
if (validateInput(fuelLevel.value) || validateInput(cargoMass.value) === "Not a Number") {
    alert("Fuel and Cargo must be integers!")
    event.preventDefault(); 
} else {  // make additional checks for cargo and fuel levels. 
    if (fuelLevel.value < 10000) { // checks to see if feul is less than 10,000
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchStatus.innerHTML = `Shuttle not ready for lauch`;
        launchStatus.style.color = 'red'; 
    } else { 
        fuelStatus.innerHTML = `Fuel level high enought for launch`;
    }
    // makes sure cargo mass is not to heavy for launch
if (cargoMass.value > 10000) { //checks to see if cargo mass is above 10000
    cargoStatus.innerHTML = `Cargo mass to heavy for launch`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = 'red';
} else { 
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
}
if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    launchStatus.style.color = 'green';
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoMassStatus.innerHTML = `Cargo mass low enough for launch`; 
}
 }
  });
   };

 

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();

 });
    

    return planetsReturned;
}

function pickPlanet(planets) {
    //using math.random return one planet from the list with a random selected index.
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet]; 
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
