import { weatherApi } from "./weather";

const weatherDisplay = (async () => {
  const weatherTile = document.getElementById("weather-tile");
  const data = await weatherApi.defaultCurrentWeather();
  console.log(data);
})();

export { weatherDisplay };
