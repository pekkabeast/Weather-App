//Function to make API call

const weatherApi = (() => {
  const apiURLHandler = (search) => {
    let baseURL = "api.weatherapi.com/v1?key=729e44ee64834065836160427230104";
    let finalURL = baseURL + "?q=" + search;
    return finalURL;
  };

  const currentWeather = (location) => {};

  const defaultCurrentWeather = () => {
    let defaultIPLookup = "auto:ip";
    const finalURL = apiURLHandler(defaultIPLookup);
    apiLookup(finalURL);
  };

  const locationSearchHandler = () => {};

  const apiLookup = (finalURL) => {
    fetch(finalURL, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return {
    defaultCurrentWeather,
  };
})();

export { weatherApi };
