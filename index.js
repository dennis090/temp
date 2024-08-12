document.addEventListener("DOMContentLoaded", function () {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const form = document.querySelector("form");

  form.addEventListener("input", function () {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsius) && fahrenheitInput !== document.activeElement) {
      fahrenheitInput.value = ((celsius * 9) / 5 + 32).toFixed(2);
    } else if (!isNaN(fahrenheit) && celsiusInput !== document.activeElement) {
      celsiusInput.value = (((fahrenheit - 32) * 5) / 9).toFixed(2);
    }
  });

  form.addEventListener("reset", function () {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
  });
});
