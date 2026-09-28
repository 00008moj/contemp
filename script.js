const textBox = document.getElementById("textBox");
const celciusToKelvin = document.getElementById("celciusToKelvin");
const kelvinToCelcius = document.getElementById("kelvinToCelcius");
const fahrenheitToCelcius = document.getElementById("fahrenheitToCelcius");
const celciusToFahrenheit = document.getElementById("celciusToFahrenheit");
const fahrenheitToKelvin = document.getElementById("fahrenheitToKelvin");
const kelvinToFahrenheit = document.getElementById("kelvinToFahrenheit");
const result = document.getElementById("result");
let temp;

function convert() {

    if(celciusToKelvin.checked) {
        temp = Number(textBox.value);
        temp = temp + 273.15;
        result.textContent = `${temp.toFixed(1)} K`;
    }
    if(celciusToKelvin.checked || textBox.value === 6767) {
        temp = Number(textBox.value);
        temp = temp + 273.15;
        result.textContent = "I MISS YOU SO MUCH, BALIK KA NA PLS";
    }
    else if(kelvinToCelcius.checked) {
        temp = Number(textBox.value);
        temp = temp - 273.15;
        result.textContent = `${temp.toFixed(1)}°C`;
    }
    else if(fahrenheitToCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp.toFixed(1)}°C`;
    }
    else if(celciusToFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}°F`;
    }
    else if(fahrenheitToKelvin.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9) + 273.15;
        result.textContent = `${temp.toFixed(1)} K`;
    }
    else if(kelvinToFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = (temp - 273.15) * (9 / 5) + 32;
        result.textContent = `${temp.toFixed(1)}°F`;
    }
    else {
        result.textContent = `Select a unit`;
    }

}
