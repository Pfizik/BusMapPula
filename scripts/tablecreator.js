function IsporuciRaspored() {
    var temp_a;
    var a;
    var b;
    var c;
    var d;
    var e;
    var increment;

    temp_a = document.getElementById("unosDana").value;

    //day converter
    if (temp_a === "Ponedjeljak" || temp_a === "Utorak" || temp_a === "Srijeda" || temp_a === "Četvrtak" || temp_a === "Petak") {
        a = "Radni dan";
    } else if (temp_a === "Subota") {
        a = "Subota";
    } else if (temp_a === "Nedjelja") {
        a = "Nedjelja";
    }

    b = document.getElementById("unosLinije").value;
    c = document.getElementById("unosPolazista").value;
    d = document.getElementById("unosOdredista").value;
    e = document.getElementById("unosVrijeme").value;
    var increment = 0;
    var brstan = 0;
    document.getElementById("praznaPretraga").removeAttribute("style");

    if (document.getElementsByClassName("tablica")[0]) {
        document.getElementsByClassName("tablica")[0].remove();
    }

    document.getElementById("container-loader").style.display = "block";

    var el = document.createElement("table");
    el.className = "tablica";
    document.getElementById("zaTablicu").appendChild(el);
    var rowTable = document.createElement("tr");
    rowTable.innerHTML = "<tr><th>Linija</th><th>Vrijeme polaska</th><th>Vrijeme dolaska</th><th>Polazište</th><th>Odredište</th></tr>";
    document.getElementsByClassName("tablica")[0].appendChild(rowTable);

    /*var brstan = 1;
    var n;
    for (n=0; Busevi[grad][n]<Busevi[grad].lenght; n++){
        if(Busevi[grad][n] == ){
            bre
        }
    }
    console.log(brstan);*/

    console.log(c);
    console.log(d);
    var polaziste = "";
    var odrediste = "";
    var n = 0;
    var k = 0;
    var n1 = [];
    var k1 = [];

    for (n; Busevi[grad].length > n; n++) {
        if (Busevi[grad][n].Stanica == c) {
            //var polaziste = Busevi[grad][increment].Stanica;
            n1.push(n);
        }
    }

    console.log(n1);

    for (k; Busevi[grad].length > k; k++) {
        if (Busevi[grad][k].Stanica == d) {
            //var odrediste = Busevi[grad][increment].Stanica;
            k1.push(k);
        }
    }

    console.log(k1);


        for (increment; n1.length > increment; increment++) {
            if (n1[increment] < k1[increment]) {
                var rowTable = document.createElement("tr");
                rowTable.innerHTML = `<td>${Busevi[grad][n1[increment]].Ruta}</td><td>${Busevi[grad][n1[increment]].Polazak}</td><td>${Busevi[grad][k1[increment]].Polazak}</td><td>${Busevi[grad][n1[increment]].Stanica}</td><td>${Busevi[grad][k1[increment]].Stanica}</td>`;
                document.getElementsByClassName("tablica")[0].appendChild(rowTable);
            }else if (k1[increment] < n1[increment]) {
                var rowTable = document.createElement("tr");
                rowTable.innerHTML = `<td>${Busevi[grad][n1[increment]].Ruta}</td><td>${Busevi[grad][k1[increment]].Polazak}</td><td>${Busevi[grad][n1[increment]].Polazak}</td><td>${Busevi[grad][k1[increment]].Stanica}</td><td>${Busevi[grad][n1[increment]].Stanica}</td>`;
                document.getElementsByClassName("tablica")[0].appendChild(rowTable);
            }
        }

    if (document.getElementsByClassName("tablica")[0] && document.getElementsByClassName("tablica")[0].getElementsByTagName("tr").length == 1) {
        document.getElementById("praznaPretraga").style.display = "block";

    }

    document.getElementById("nazivTablice").getElementsByTagName("span")[0].textContent = a;
    document.getElementById("nazivTabliceMob").getElementsByTagName("span")[0].textContent = a;
    document.getElementById("container-loader").removeAttribute("style");
    document.getElementById('nazivTabliceMob').scrollIntoView({ behavior: "smooth" })

    document.getElementsByClassName("tablica")[0].getElementsByTagName("TR")[0].getElementsByTagName("TH")[1].click();
}



document.getElementsByClassName("gumb")[0].addEventListener("click", IsporuciRaspored);


document.getElementById("zaGore").addEventListener("click", function () {
    document.getElementById('naslov').scrollIntoView({ behavior: "smooth" });
});