var grad = document.getElementById("unosGrada").value

function dayInput() {
    var today2 = new Date();
    var d = today2.getDay();
    if (d === 1) {
        document.getElementById("unosDana").value = "Ponedjeljak";
    } else if (d === 2) {
        document.getElementById("unosDana").value = "Utorak";
    } else if (d === 3) {
        document.getElementById("unosDana").value = "Srijeda";
    } else if (d === 4) {
        document.getElementById("unosDana").value = "Četvrtak";
    } else if (d === 5) {
        document.getElementById("unosDana").value = "Petak";
    } else if (d === 6) {
        document.getElementById("unosDana").value = "Subota";
    } else if (d === 0) {
        document.getElementById("unosDana").value = "Nedjelja";
    }
}
dayInput();

var listOfCityes = Object.keys(Busevi);
for (var i = 0; listOfCityes.length > i; i++) {
    var el = document.createElement("option");
    el.textContent = listOfCityes[i];
    var parent = document.getElementById("unosGrada");
    parent.appendChild(el);
}

function fecthDataForCity() {
    var routsArray = Array();
    var busStationArray = Array();
    var departureArray = Array();
    grad = document.getElementById("unosGrada").value; //Kada selectiraš opciju, onda select tag ima taj value
    for (var t = 0; Busevi[grad].length > t; t++) {
        var routs = Busevi[grad][t].Ruta;
        var busStation = Busevi[grad][t].Stanica;
        //console.log(busStation);
        var departure = Busevi[grad][t].Stanica;
        var day = Busevi[grad][t].Dan;
        var p1 = document.getElementById("unosLinije");
        var p2 = document.getElementById("unosPolazista");
        var p3 = document.getElementById("unosOdredista");

        if (routsArray.includes(routs) == false) {
            routsArray.push(routs);
        }

        if (busStationArray.includes(busStation) == false) {
            busStationArray.push(busStation);
            console.log(busStation);
        }

        if (departureArray.includes(departure) == false) {
            departureArray.push(departure);
        }

    }

    p1.innerHTML = "";
    var el = document.createElement("option");
    p1.appendChild(el);
    for (z = 0; routsArray.length > z; z++) {

        var el = document.createElement("option");
        el.textContent = routsArray[z];
        var parent = p1;
        parent.appendChild(el);
    }

    p2.innerHTML = "";
    var el = document.createElement("option");
    p2.appendChild(el);

    for (z = 0; busStationArray.length > z; z++) {

        var el = document.createElement("option");
        el.textContent = busStationArray[z];
        var parent = p2;
        parent.appendChild(el);
        
    }

    p3.innerHTML = "";
    var el = document.createElement("option");
    p3.appendChild(el);

    for (z = 0; departureArray.length > z; z++) {

        var el = document.createElement("option");
        el.textContent = departureArray[z];
        var parent = p3;
        parent.appendChild(el);
        
    }



}

document.getElementById("unosGrada").addEventListener("change", fecthDataForCity);