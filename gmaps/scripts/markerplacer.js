var full_url;

function markerplacer() {
    var main_url = "https://www.google.com/maps/embed/v1/directions?key=";
    var api_key = "AIzaSyA0zgBOBMt1EGaPnPe7naYPJ6oLt1oTs4s";
    var waypoints = "";
    if (n1[0] < k1[0]) {
        var j = (n1[0] + 1)
        waypoints += Busevi[grad][j].geo_lat + "," + Busevi[grad][j].geo_lon;
        for (j + 1; j < k1[0]; j++) {
            waypoints += "|" + Busevi[grad][j].geo_lat + "," + Busevi[grad][j].geo_lon;
        }
    } else if (n1[0] > k1[0]) {
        var j = (k1[0] + 1)
        waypoints += Busevi[grad][j].geo_lat + "," + Busevi[grad][j].geo_lon;
        for (j + 1; j < n1[0]; j++) {
            waypoints += "|" + Busevi[grad][j].geo_lat + "," + Busevi[grad][j].geo_lon;
        }
    }
    console.log(waypoints);
    var position = "&origin=" + Busevi[grad][n1[0]].geo_lat + "," + Busevi[grad][n1[0]].geo_lon + "&destination=" + Busevi[grad][k1[0]].geo_lat + "," + Busevi[grad][k1[0]].geo_lon + "&waypoints=";
    full_url = main_url + api_key + position + waypoints;
    document.getElementById("gmap").setAttribute("src", full_url);
}

document.getElementsByClassName("gumb")[0].addEventListener("click", markerplacer);