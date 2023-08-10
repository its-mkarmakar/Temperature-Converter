// calculate fahrenheit to celsius
function calculateFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// calculate celsius to fahrenheit
function calculateCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// get ids
const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");
const exchange = document.getElementById("exchange");

// add event listener to fahrenheitInput
fahrenheitInput.addEventListener("input", function () {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  celsiusInput.value = calculateFahrenheitToCelsius(fahrenheitValue);

  // display formula in footer
  formula(fahrenheitValue);
});

// add event listener to celsiusInput
celsiusInput.addEventListener("input", function () {
  const celsiusValue = parseFloat(celsiusInput.value);
  fahrenheitInput.value = calculateCelsiusToFahrenheit(celsiusValue);

  // display formula in footer
  formula(fahrenheitInput.value);
});

function formula(value) {
  const formula = document.getElementById("formula");
  if (isNaN(value)) {
    formula.innerHTML = `<span class="px-2 py-1 bg-red-500 text-white rounded-lg">Formula: (°F - 32) * 5/9 = °C</span>`;
  } else {
    formula.innerHTML = `<span class="px-2 py-1 bg-green-500 text-white rounded-lg">Formula: (${value}°F - 32) * 5/9 = ${calculateFahrenheitToCelsius(
      value
    ).toFixed(2)}°C</span>`;
  }
}
