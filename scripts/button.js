function mapAppear(){
    document.getElementById("gmap").className = "gmap-active";
    document.getElementById("gmap").setAttribute("src", full_url);
    document.getElementById("map-switch").className= "switch-active";
    document.getElementById("map-exit").className= "exit-active";
    document.getElementById("map-switch").removeEventListener("click", mapAppear);
    document.getElementById("map-switch").addEventListener("click", mapDisappear);
    document.getElementById("map-exit").addEventListener("click", mapDisappear);
}

function mapDisappear(){
    document.getElementById("gmap").className = "gmap-inactive";
    document.getElementById("gmap").setAttribute("src", "");
    document.getElementById("map-switch").className= "switch-inactive";
    document.getElementById("map-exit").className= "exit-inactive";
    document.getElementById("map-switch").removeEventListener("click", mapDisappear);
    document.getElementById("map-switch").addEventListener("click", mapAppear);
    document.getElementById("map-exit").removeEventListener("click", mapDisappear);
}

document.getElementById("map-switch").addEventListener("click", mapAppear);