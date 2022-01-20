// Write your helper functions here!
try {
    require('isomorphic-fetch');
} catch (e) {

}
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // window.addEventListener("load", function() {
    document.getElementById("missionTarget").innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}"> 
            `;
    //});
}

function validateInput(testInput) {
    //window.addEventListener("load", function() { 
    //let testInput = document.querySelector("testForm");
    // form.addEventListener("submit", function (event) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput)) == true) {
        return "Not a Number";
    } else
        return "Is a Number";
    // });
    //});
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let button = document.getElementById("formSubmit");
    //button.addEventListener("click", function () {
    // variables for calling <form> input
    //    let pilotName = document.querySelector("input[name=pilotName]");
    //    let copilotName = document.querySelector("input[name=copilotName]");
    //    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    //    let cargoMass = document.querySelector("input[name=cargoMass]");
    //   // variables for calling elements
    //    let faultyItems = document.getElementById('faultyItems');
    //    let launchStatus = document.getElementById('launchStatus');
    //    let fuelStatus = document.getElementById('fuelStatus');
    //    let pilotStatus = document.getElementById('pilotStatus');
    //    let cargoStatus = document.getElementById('cargoStatus');
    //    let copilotStatus = document.getElementById('copilotStatus');

    // make sure all inputs have a string value 
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All field are required!");
        return;
        //  event.preventDefault();
    }
    //make sure pilot and copilot names are input as strings 
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Fuel and Cargo must be integers!");
        return;
    }

    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);

    // fill in pilot and copilot
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready`;


    let isLaunchReady = true;

    if (fuelLevel < 10000) { // checks to see if fuel is less than 10,000
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        isLaunchReady = false;
        //launchStatus.innerHTML = `Shuttle not ready for lauch`;
        //launchStatus.style.color = 'red';
    } else {
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enought for launch`;
    }

    // makes sure cargo mass is not to heavy for launch
    if (cargoLevel > 10000) { //checks to see if cargo mass is above 10000
        document.getElementById("cargoStatus").innerHTML = `Cargo mass to heavy for launch`;
        isLaunchReady = false;
        //launchStatus.innerHTML = `Shuttle not ready for launch`;
        //launchStatus.style.color = 'red';
    } else {
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    }


    if (isLaunchReady === false) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is not Ready for Launch";
        launchStatus.style.color = 'red';
    }
    else{
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(65,159,106)";
    }
    

    list.style.visibility = "visible";
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();

    });


    return planetsReturned;
}

function pickPlanet(planets) {
    //using math.random return one planet from the list with a random selected index.
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
}
try {
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet;
    module.exports.myFetch = myFetch;
} catch (e) {

}