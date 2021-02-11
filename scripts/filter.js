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
    } else if (d === 7) {
        document.getElementById("unosDana").value = "Nedjelja";
    }
}

var t1;
for (t1 = 1; Busevi.List1.length > t1; t1++) {
    if (t1 == 1) {
        var el = document.createElement("option");
        el.innerText = Busevi.List1[0].Ruta;
        document.getElementById("unosLinije").appendChild(el);
    } else if (Busevi.List1[t1].Ruta !== Busevi.List1[t1 - 1].Ruta) {
        var el = document.createElement("option");
        el.innerText = Busevi.List1[t1].Ruta;
        document.getElementById("unosLinije").appendChild(el);
    }
}

function filter() {
    document.getElementById("unosPolazista").innerHTML = "<option></option>";
    document.getElementById("unosOdredista").innerHTML = "<option></option>";
    for (t1 = 1; Busevi.List1.length > t1; t1++) {
        if (t1 == 1) {
            if (document.getElementById("unosLinije").value == Busevi.List1[0].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi.List1[0].Stanica;
                document.getElementById("unosPolazista").appendChild(el);
            }
        } else if (Busevi.List1[t1].Stanica !== Busevi.List1[t1 - 1].Stanica) {
            if (document.getElementById("unosLinije").value == Busevi.List1[t1].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi.List1[t1].Stanica;
                document.getElementById("unosPolazista").appendChild(el);
            }
        }
    }

    for (t1 = 1; Busevi.List1.length > t1; t1++) {
        if (t1 == 1) {
            if (document.getElementById("unosLinije").value == Busevi.List1[0].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi.List1[0].Stanica;
                document.getElementById("unosOdredista").appendChild(el);
            }
        } else if (Busevi.List1[t1].Stanica !== Busevi.List1[t1 - 1].Stanica) {
            if (document.getElementById("unosLinije").value == Busevi.List1[t1].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi.List1[t1].Stanica;
                document.getElementById("unosOdredista").appendChild(el);
            }
        }
    }
}

