// Write your JavaScript code here!

window.addEventListener("load", function() {

let listedPlanetsResponse = myFetch();

listedPlanetsResponse.then(function (json) {
    // prints data about planets
    console.log(json);
// call pickPlanet 

// add info from pickPlanet to addDestinationInfo

});
