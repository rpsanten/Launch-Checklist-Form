// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
<img src="https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg">
         `;
      });
   });
});




window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   let launchStatus=document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus= document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus= document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   form.addEventListener("submit", function(event) {
      let pilot=document.querySelector("input[name=pilotName]");
      let copilot=document.querySelector("input[name=copilotName]");
      let fuel=document.querySelector("input[name=fuelLevel]");
      let cargoMass=document.querySelector("input[name=cargoMass]");
      if(pilot.value==null||copilot.value==null||fuel.value==null||cargoMass.value==null){
         event.preventDefault();
         alert("All fields are required!");
      }
      else if (!isNaN(pilot.value)||!isNaN(copilot.value)||isNaN(fuel.value)||isNaN(cargoMass.value)){
      event.preventDefault();
      alert("Make sure to enter valid information for each field!");
      }
      else{
      event.preventDefault();
      alert("submit clicked");
      pilotStatus.setAttribute("pilotStatus",`${pilot}`);
      copilotStatus.setAttribute("copilotStatus",`${copilot}`); 
      console.log(fuel);
         if(fuel.value<10000){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML="Shuttle not ready for launch";
         launchStatus.style.color="red";
         fuelStatus.innerHTML="Fuel too low for launch!";
         
         }

         else if(cargoMass.value>10000){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML="Shuttle not ready for launch";
         launchStatus.style.color="red";
         cargoStatus.innerHTML="Cargo too heavy for launch!";
         }

         else {
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML="Shuttle is ready for launch";
         launchStatus.style.color="green";
         }
      }
   
   
   });
});


// element.setAttribute("pilotStatus",`${pilot}`);
// element.setAttribute("copilotStatus",`${copilot}`); 

// if(fuel<10000){
//    faultyItems.style.visibility="visilbe";
//    element.setAttribute("launchStatus","Shuttle not ready for launch");
//    launchStatus.style.color="red";

// }

// else if(cargoMass>10000){
//    faultyItems.style.visibility="visilbe";
//    element.setAttribute("launchStatus","Shuttle not ready for launch");
//    launchStatus.style.color="red";
// }

// else {
//    element.setAttribute("launchStatus","Shuttle is ready for launch");
//    launchStatus.style.color="green";
// }








