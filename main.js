function next() {
    var next1 = document.getElementById("category").value;
    if (next1 == "Chlorophyll-a concentration") {
        window.location = "C-a.html";
    } 
    else if (next1 == "Atmospheric NO2 concentration") {
        window.location = "NO2.html";
    } else if (next1 == "Atmospheric CO2 concentration") {
        window.location = "CO2.html";
    } else if (next1 == "Turbidity") {
        window.location = "Turbidity.html";
    } else {
        window.location = "Agriculture.html";
    }
    console.log(next1);
}
