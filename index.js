const tempInput = document.getElementById('temp');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const resultParagraph = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const temperature = parseFloat(tempInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultParagraph.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemp;
    let convertedUnit;

    if (unit === "Fahrenheit") {
        convertedTemp = (temperature - 32) * (5 / 9); // Convert Fahrenheit to Celsius
        convertedUnit = "°C";
    } else if (unit === "Celsius") {
        convertedTemp = (temperature * 9 / 5) + 32; // Convert Celsius to Fahrenheit
        convertedUnit = "°F";
    } else if (unit === "Kelvin") {
        if (temperature < 0) {
            resultParagraph.textContent = "Kelvin temperature cannot be negative.";
            return;
        }
        convertedTemp = temperature - 273.15; // Convert Kelvin to Celsius
        convertedUnit = "°C";
    }

    resultParagraph.textContent = `${convertedTemp.toFixed(2)} ${convertedUnit}`;
});