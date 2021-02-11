function IsporuciRaspored() {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var increment;

    a = document.getElementById("unosDana").value;
    b = document.getElementById("unosProfesora").value;
    c = document.getElementById("unosRazreda").value;
    d = document.getElementById("unosPredmeta").value;
    e = document.getElementById("unosUcionica").value;
    f = document.getElementById("unosSati").value;
    g = document.getElementById("unosSmjena").value;
    var increment = 0;
    document.getElementById("praznaPretraga").removeAttribute("style");

    if (document.getElementsByClassName("tablica")[0]) {
        document.getElementsByClassName("tablica")[0].remove();
    }

    document.getElementById("container-loader").style.display = "block";
    //console.log("Radi")

    var el = document.createElement("table");
    el.className = "tablica";
    document.getElementById("zaTablicu").appendChild(el);
    var rowTable = document.createElement("tr");
    rowTable.innerHTML = "<tr><th>Ime i prezime</th><th>Sat</th><th>Predmet</th><th>Razred</th><th>Učionica</th><th>Smjena</th></tr>";
    document.getElementsByClassName("tablica")[0].appendChild(rowTable);

    for (increment; Raspored.Raspored.length > increment; increment++) {
        var prof = Raspored.Raspored[increment].Prof;
        var razred = Raspored.Raspored[increment].Razred;
        var predmet = Raspored.Raspored[increment].Predmet;
        var prostor = Raspored.Raspored[increment].Prostor;
        var dan = Raspored.Raspored[increment].Dan;
        var sat = Raspored.Raspored[increment].Sat;
        var smjena = Raspored.Raspored[increment].Smjena;
        // console.log(prof);

        //container-loader
        if ((prof == b || b == "") && (dan == a || a == "") && (razred == c || c == "") && (predmet == d || d == "") && (prostor == e || e == "") && (sat == f || f == "") && (smjena == g || g == "")) {
            //console.log("Radi");
            ""
            var rowTable = document.createElement("tr");
            var sat1 = sat.replace(".", "");
            rowTable.setAttribute("data-sat", sat1);
            rowTable.innerHTML = `<td>${prof}</td><td>${sat}</td><td>${predmet}</td><td>${razred}</td><td>${prostor}</td><td>${smjena}</td>`;
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

    document.getElementsByClassName("tablica")[0].getElementsByTagName("TR")[0].getElementsByTagName("TH")[1].addEventListener("click", IsporuciRasporedPoredan);
    document.getElementsByClassName("tablica")[0].getElementsByTagName("TR")[0].getElementsByTagName("TH")[1].click();
}
IsporuciRaspored();



document.getElementsByClassName("gumb")[0].addEventListener("click", IsporuciRaspored);


document.getElementById("zaGore").addEventListener("click", function () {
    document.getElementById('naslov').scrollIntoView({ behavior: "smooth" });
});

document.getElementsByClassName("gumb")[1].addEventListener("click", function () {

    if (document.getElementById("unosSmjena").value != "") {
        var a, b;
        var increment = 0;
        var satIzbor = document.getElementById("satSlobodno").value;
        a = document.getElementById("unosDana").value;
        b = document.getElementById("unosSmjena").value;
        var sat = Raspored.Raspored[increment].Sat;



        if (document.getElementsByClassName("tablica")[0]) {
            document.getElementsByClassName("tablica")[0].remove();
        }

        var el = document.createElement("table");
        el.className = "tablica";
        document.getElementById("zaTablicu").appendChild(el);
        var rowTable = document.createElement("tr");
        rowTable.innerHTML = "<tr><th>Ime i prezime</th><th>Sat</th><th>Predmet</th><th>Razred</th><th>Učionica</th><th>Smjena</th></tr>";
        document.getElementsByClassName("tablica")[0].appendChild(rowTable);

        for (increment; Raspored.Raspored.length > increment; increment++) {

            var prof = Raspored.Raspored[increment].Prof;
            var razred = Raspored.Raspored[increment].Razred;
            var predmet = Raspored.Raspored[increment].Predmet;
            var prostor = Raspored.Raspored[increment].Prostor;
            var dan = Raspored.Raspored[increment].Dan;
            var sat = Raspored.Raspored[increment].Sat;
            var smjena = Raspored.Raspored[increment].Smjena;
            if (sat == satIzbor && predmet == "//" && b == smjena) {
                var rowTable = document.createElement("tr");
                var sat1 = sat.replace(".", "");
                rowTable.setAttribute("data-sat", sat1);
                rowTable.innerHTML = `<td>${prof}</td><td>${sat}</td><td>${predmet}</td><td >${razred}</td><td class="slobodnaUcionica">${prostor}</td><td>${smjena}</td>`;
                document.getElementsByClassName("tablica")[0].appendChild(rowTable);
            } else {

            }


        }
        if (document.getElementsByClassName("tablica")[0].getElementsByTagName("tr").length > 1) {
            document.getElementById("praznaPretraga").removeAttribute("style");

        } else {
            document.getElementById("praznaPretraga").style.display = "block";
        }
        document.getElementById('nazivTabliceMob').scrollIntoView({ behavior: "smooth" })
    } else {
        alert("Izaberite sat i smjenu");
    }
});