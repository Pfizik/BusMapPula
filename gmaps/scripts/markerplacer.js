/*var main_url = "https://www.google.com/maps/embed/v1/directions?key=";
var api_key = "AIzaSyA0zgBOBMt1EGaPnPe7naYPJ6oLt1oTs4s";
var position = "&origin=" + "Autobusni+kolodvor+Pula+Hrvatska" + "&destination=" + "Zagrebačka+22+Pula+Hrvatska" + "&waypoints=Giardini+9+Pula+Hrvatska";
var full_url = main_url + api_key + position;*/

var full_url

function markerplacer() {
    var main_url = "https://www.google.com/maps/embed/v1/directions?key=";
    var api_key = "AIzaSyA0zgBOBMt1EGaPnPe7naYPJ6oLt1oTs4s";
    var position = "&origin=" + Busevi[grad][n1[0]].geo_lat + ", " + Busevi[grad][n1[0]].geo_lon + "&destination=" + Busevi[grad][k1[0]].geo_lat + ", " + Busevi[grad][k1[0]].geo_lon;
    full_url = main_url + api_key + position;
    document.getElementById("gmap").setAttribute("src", full_url);
}
