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
    document.getElementById("praznaPretraga").removeAttribute("style");

    if (document.getElementsByClassName("tablica")[0]) {
        document.getElementsByClassName("tablica")[0].remove();
    }

    document.getElementById("container-loader").style.display = "block";

    var el = document.createElement("table");
    el.className = "tablica";
    document.getElementById("zaTablicu").appendChild(el);
    var rowTable = document.createElement("tr");
    rowTable.innerHTML = "<tr><th>Linija</th><th>Vrijeme polaska</th><th>Polazište</th><th>Odredište</th></tr>";
    document.getElementsByClassName("tablica")[0].appendChild(rowTable);

    for (increment; Busevi[grad].length > increment; increment++) {
        var prof = Busevi[grad][increment].Ruta;
        var razred = Busevi[grad][increment].Stanica;
        var predmet = Busevi[grad][increment].Polazak;
        var prostor = Busevi[grad][increment].Dan;
        var odrediste = Busevi[grad][increment].Stanica;
        
        //container loader
        if ((prof == b || b == "") && (razred == c || c == "") && (prostor == a || a == "") && (odrediste == d || d == "")) {
            var rowTable = document.createElement("tr");
            rowTable.innerHTML = `<td>${prof}</td><td>${predmet}</td><td>${razred}</td><td>${odrediste}</td>`;
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
IsporuciRaspored();



document.getElementsByClassName("gumb")[0].addEventListener("click", IsporuciRaspored);


document.getElementById("zaGore").addEventListener("click", function () {
    document.getElementById('naslov').scrollIntoView({ behavior: "smooth" });
});