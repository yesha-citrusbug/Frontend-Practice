import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [temperatureType, setTemperatureType] = useState<"C" | "F">("C");

  function handleCelsiusChange(value: string) {
    setTemperature(value);
    setTemperatureType("C");
  }

  function handleFahrenheitChange(value: string) {
    setTemperature(value);
    setTemperatureType("F");
  }

  function convertToCelsius(value: string) {
    const number = Number(value);

    if (value === "" || Number.isNaN(number)) {
      return "";
    }

    return temperatureType === "C"
      ? number
      : ((number - 32) * 5) / 9;
  }

  function convertToFahrenheit(value: string) {
    const number = Number(value);

    if (value === "" || Number.isNaN(number)) {
      return "";
    }

    return temperatureType === "F"
      ? number
      : (number * 9) / 5 + 32;
  }

  return (
    <div>
      <h2>Temperature Converter</h2>

      <CelsiusInput
        value={convertToCelsius(temperature).toString()}
        onChange={handleCelsiusChange}
      />

      <FahrenheitInput
        value={convertToFahrenheit(temperature).toString()}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureConverter;