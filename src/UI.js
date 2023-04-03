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
  tempDesc.textContent = data.current.condition.text;

  weatherTile.append(tileTitle, tileTime, tileTemp, tempDesc);
})();

const pageDisplay = (() => {
  const initPage = () => {
    initNavBar();
  };

  const initHeader = () => {
    const header = document.querySelector(".header");
  };

  const initNavBar = () => {
    const todayNav = document.createElement("div");
    todayNav.textContent = "Today";
    const hourlyNav = document.createElement("div");
    hourlyNav.textContent = "Hourly";
    const dailyNav = document.createElement("div");
    dailyNav.textContent = "Daily";

    const header = document.querySelector(".navbar");
    header.append(todayNav, hourlyNav, dailyNav);
  };

  return {
    initPage,
  };
})();

const searchBar = () => {};

export { weatherTileDisplay, pageDisplay };
