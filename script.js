// Write your JavaScript code here!

window.addEventListener("load", function() {
let listedPlanets;

let planetsResponse = myFetch();


planetsResponse.then(function (result) {
    listedPlanets = result;
    const planet = pickPlanet(listedPlanets);
    console.log(planet);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
});

// change faultyItems to be invisible by default so doesn't pop up at first
let list = document.getElementById("faultyItems");
list.style.visibility = "hidden"; 
document.getElementById("launchcodeform").addEventListener("submit", function(event) {
    event.preventDefault();

    const pilotName = document.getElementById("pilotName").value;
    const copilotName = document.getElementById("copilotName").value;
    const fuelLevel = document.getElementById("fuelLevel").value;
    const cargoMass = document.getElementById("cargoMass").value;
console.log(pilotName, copilotName);
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
});
});
