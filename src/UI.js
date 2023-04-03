import { weatherApi } from "./weather";

const weatherTileDisplay = (async () => {
  const weatherTile = document.querySelector(".weather-tile");
  const data = await weatherApi.defaultCurrentWeather();
  const tileTitle = document.createElement("h1");
  tileTitle.classList.add("tile-title");
  tileTitle.textContent = "Current Weather";
  const tileTime = document.createElement("h2");
  tileTime.classList.add("tile-time");
  tileTime.textContent = data.location.localtime;
  const tileTemp = document.createElement("div");
  tileTemp.classList.add("temp-display");
  const tempIcon = new Image(100, 100);
  tempIcon.src = data.current.condition.icon;
  const tempTemp = document.createElement("div");
  tempTemp.textContent = data.current.temp_c + "C";
  tileTemp.append(tempIcon, tempTemp);

  weatherTile.append(tileTitle, tileTime, tileTemp);
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
