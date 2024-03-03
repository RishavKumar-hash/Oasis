function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var result = document.getElementById("result");

    // Check if temperatureInput is a valid number
    if (isNaN(temperatureInput)) {
        result.textContent = "Please enter a valid number for temperature.";
        return;
    }

    // Convert temperature based on selected unit
    var convertedTemperature;
    switch(unitSelect) {
        case "celsius":
            convertedTemperature = (temperatureInput - 32) * 5/9;
            result.textContent = temperatureInput + "°F is " + convertedTemperature.toFixed(2) + "°C";
            break;
        case "fahrenheit":
            convertedTemperature = (temperatureInput * 9/5) + 32;
            result.textContent = temperatureInput + "°C is " + convertedTemperature.toFixed(2) + "°F";
            break;
        case "kelvin":
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            result.textContent = temperatureInput + "°C is " + convertedTemperature.toFixed(2) + "K";
            break;
        default:
            result.textContent = "Invalid unit selected.";
    }
}
