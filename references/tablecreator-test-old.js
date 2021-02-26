function IsporuciRaspored() {
    var a;
    var b;
    var c;
    var d;
    var e;
    var increment;

    a = document.getElementById("unosDana").value;
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
    console.log("Radi")

    var el = document.createElement("table");
    el.className = "tablica";
    document.getElementById("zaTablicu").appendChild(el);
    var rowTable = document.createElement("tr");
    rowTable.innerHTML = "<tr><th>Linija</th><th>Vrijeme polaska</th><th>Stanica</th><th>Dan</th></tr>";
    document.getElementsByClassName("tablica")[0].appendChild(rowTable);

    for (increment; Busevi.List1.length > increment; increment++) {
        var prof = Busevi.List1[increment].Ruta;
        var razred = Busevi.List1[increment].Stanica;
        var predmet = Busevi.List1[increment].Polazak;
        var prostor = Busevi.List1[increment].Dan;
        // console.log(prof);

        //container-loader
        if ((prof == b || b == "") && (razred == c || c == "") && (predmet == d || d == "") && (prostor == e || e == "")) {
            //console.log("Radi");
            ""
            var rowTable = document.createElement("tr");
            rowTable.innerHTML = `<td>${prof}</td><td>${predmet}</td><td>${razred}</td><td>${prostor}</td>`;
            document.getElementsByClassName("tablica")[0].appendChild(rowTable);
            //console.log(prof + " " + razred + " " + predmet + " " + prostor + " " + dan + " " + sat + " " + smjena);

        } else {
            //console.log("Nema zapisa");
            //console.log(prof + b);
            //console.log(Raspored.Raspored[increment].Prof);
        }
    }

    if (document.getElementsByClassName("tablica")[0] && document.getElementsByClassName("tablica")[0].getElementsByTagName("tr").length == 1) {
        //document.getElementsByClassName("tablica")[0].remove();
        document.getElementById("praznaPretraga").style.display = "block";

    }

    //console.log("Gotovo");
    document.getElementById("nazivTablice").getElementsByTagName("span")[0].textContent = a;
    document.getElementById("nazivTabliceMob").getElementsByTagName("span")[0].textContent = a;
    document.getElementById("container-loader").removeAttribute("style");
    document.getElementById('nazivTabliceMob').scrollIntoView({ behavior: "smooth" })

    //document.getElementsByClassName("tablica")[0].getElementsByTagName("TR")[0].getElementsByTagName("TH")[1].addEventListener("click", IsporuciRasporedPoredan);
    document.getElementsByClassName("tablica")[0].getElementsByTagName("TR")[0].getElementsByTagName("TH")[1].click();
}
IsporuciRaspored();



document.getElementsByClassName("gumb")[0].addEventListener("click", IsporuciRaspored);


document.getElementById("zaGore").addEventListener("click", function () {
    document.getElementById('naslov').scrollIntoView({ behavior: "smooth" });
});