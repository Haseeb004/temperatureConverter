function converToCelsius(){
    var celsius=document.getElementById("celsius").value;
    var fahrenheit=(celsius *9/5)+32;
    document.getElementById("result").innerHTML=celsius + " is °C" + fahrenheit.toFixed(2)+  "°F";
}
function convertToFahrenheit(){
    var fahrenheit= document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML =fahrenheit+  "is °F"; + celsius.toFixed(2)+ " is °C";
}