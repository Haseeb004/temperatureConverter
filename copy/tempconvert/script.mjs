
// function convertToCelsius(){
//     var celsius = document.getElementById("celsius").value;
//     var fahrenheit = (celsius * 9/5) + 32;
//     document.getElementById("result").innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
// }

// function convertToFahrenheit(){
//     var fahrenheit = document.getElementById("fahrenheit").value;
//     var celsius = (fahrenheit - 32) * 5/9;
//     document.getElementById("result").innerHTML = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
// }
function convertToCelsius(){
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) +  "°F";
}

function convertToFahrenheit(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = fahrenheit + "°F" + celsius.toFixed(2) + "°C";
}
