function clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var timeValue = h + ":" + m;
    var inputTime = document.getElementById("unosVrijeme");
    document.inputTime.value = timeValue.toString();
    console.log(timeValue.toString());
}

function startTime(a) {
    if (a == "true") {
        setTimeout(clock, 500);
    } else {
        clearTimeout(clock);
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

document.getElementById("unosVrijeme").addEventListener("active", startTime.bind("true"));