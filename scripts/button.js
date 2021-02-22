function mapAppear(){
    document.getElementById("gmap-inactive").id = "gmap";
    document.getElementById("map-switch").id= "switch-active";
    document.getElementById("switch-active").addEventListener("click", mapDisappear);
}

function mapDisappear(){
    document.getElementById("gmap").id = "gmap-inactive";
    document.getElementById("switch-active").id= "map-switch";
    document.getElementById("map-switch").addEventListener("click", mapAppear);
}

document.getElementById("map-switch").addEventListener("click", mapAppear);