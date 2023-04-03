import { weatherApi } from "./weather";

const weatherTileDisplay = (async () => {
  const weatherTile = document.querySelector(".weather-tile");
  const data = await weatherApi.defaultCurrentWeather();
  const tileTitle = document.createElement("div");
  tileTitle.classList.add("tile-title");
  tileTitle.textContent = "Current Weather";
  const tileTime = document.createElement("div");
  tileTime.classList.add("tile-time");
  const time = new Date(data.location.localtime);
  tileTime.textContent =
    time.getHours() +
    ":" +
    (time.getMinutes() < 10 ? "0" : "") +
    time.getMinutes() +
    (time.getHours() >= 12 ? "pm" : "am");
  const tileTemp = document.createElement("div");
  tileTemp.classList.add("temp-display");
  const tempIcon = new Image(100, 100);
  tempIcon.src = data.current.condition.icon;
  const tempTemp = document.createElement("div");
  tempTemp.textContent = data.current.temp_c + "\u00B0C";
  tileTemp.append(tempIcon, tempTemp);
  const tempDesc = document.createElement("div");
  tempDesc.classList.add("temp-desc");
  tempDesc.textContent = data.current.condition.text;

  weatherTile.append(tileTitle, tileTime, tileTemp, tempDesc);
})();

const updatePage = (() => {
  const displayLocationHeader = async () => {
    const data = await weatherApi.defaultCurrentWeather();
    const location = document.querySelector(".location");

    location.textContent = data.location.name + ", " + data.location.country;
  };

  const updateLocationHeader = async (search) => {
    const location = document.querySelector(".location");
    while (location.firstChild) {
      location.removeChild(location.firstChild);
    }
    location.textContent = search.name + ", " + search.country;
  };

  const updateWeatherTileDisplay = async (location) => {
    const data = await weatherApi.customCurrentWeather(location);

    const tileTime = document.querySelector(".tile-time");
    const time = new Date(data.location.localtime);
    tileTime.textContent =
      (time.getHours() % 12) +
      ":" +
      (time.getMinutes() < 10 ? "0" : "") +
      time.getMinutes() +
      (time.getHours() >= 12 ? "pm" : "am");

    const tileTemp = document.querySelector(".temp-display");
    while (tileTemp.firstChild) {
      tileTemp.removeChild(tileTemp.firstChild);
    }
    const tempIcon = new Image(100, 100);
    tempIcon.src = data.current.condition.icon;
    const tempTemp = document.createElement("div");
    tempTemp.textContent = data.current.temp_c + "\u00B0C";
    tileTemp.append(tempIcon, tempTemp);

    const tempDesc = document.querySelector(".temp-desc");
    tempDesc.textContent = data.current.condition.text;
  };

  return {
    displayLocationHeader,
    updateWeatherTileDisplay,
    updateLocationHeader,
  };
})();

const pageDisplay = (() => {
  const initPage = () => {
    initHeader();
    weatherApi.locationSearchHandler();
  };

  const initHeader = () => {
    updatePage.displayLocationHeader();
  };

  return {
    initPage,
  };
})();

export { weatherTileDisplay, pageDisplay, updatePage };
