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

function filterLine() {
    grad = document.getElementById("unosGrada").value;
    document.getElementById("unosLinije").innerHTML = "<option></option>";
    var t1 = 0;
    for (t1 = 1; Busevi[grad].length > t1; t1++) {
        if (t1 == 1) {
            var el = document.createElement("option");
            el.innerText = Busevi[grad][0].Ruta;
            document.getElementById("unosLinije").appendChild(el);
        } else if (Busevi[grad][t1].Ruta !== Busevi[grad][t1 - 1].Ruta) {
            var el = document.createElement("option");
            el.innerText = Busevi[grad][t1].Ruta;
            document.getElementById("unosLinije").appendChild(el);
        }
    }
}

function lineSkipper(){
    
}

function filter() {
    document.getElementById("unosPolazista").innerHTML = "<option></option>";
    document.getElementById("unosOdredista").innerHTML = "<option></option>";
    var l1 = 0;
    for (l1 = 1; Busevi[grad].length > l1; l1++) {
        if (l1 == 1) {
            if (document.getElementById("unosLinije").value == Busevi[grad][0].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi[grad][0].Stanica;
                document.getElementById("unosPolazista").appendChild(el);
            }
        } else if (Busevi[grad][l1].Stanica !== Busevi[grad][l1 - 1].Stanica) {
            if (document.getElementById("unosLinije").value == Busevi[grad][l1].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi[grad][l1].Stanica;
                document.getElementById("unosPolazista").appendChild(el);
            }
        } else if (Busevi[grad][l1].Stanica == Busevi[grad][l1 - 1].Stanica) {
            lineSkipper();
            /*while (Busevi[grad][debug].Ruta == Busevi[grad][l1].Ruta) {
                debug++;
            }
            l1 = debug;

            /*for(var znj = l1; Busevi[grad].length > znj; znj++){
                if(Busevi[grad][znj].Ruta !== Busevi[grad][l1].Ruta){
                    console.log(1)
                    l1 = znj;
                }
            }
            console.log(l1);*/
        }
    }

    var h1 = 0;
    for (h1 = 1; Busevi[grad].length > h1; h1++) {
        if (h1 == 1) {
            if (document.getElementById("unosLinije").value == Busevi[grad][0].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi[grad][0].Stanica;
                document.getElementById("unosOdredista").appendChild(el);
            }
        } else if (Busevi[grad][h1].Stanica !== Busevi[grad][h1 - 1].Stanica) {
            if (document.getElementById("unosLinije").value == Busevi[grad][h1].Ruta || document.getElementById("unosLinije").value == "") {
                var el = document.createElement("option");
                el.innerText = Busevi[grad][h1].Stanica;
                document.getElementById("unosOdredista").appendChild(el);
            }
        } else if (Busevi[grad][h1].Stanica == Busevi[grad][h1 - 1].Stanica) {
            
        }
    }
}

document.getElementById("unosGrada").addEventListener("change", filterLine)
document.getElementById("unosGrada").addEventListener("change", filter)