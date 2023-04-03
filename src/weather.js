//Function to make API call

const weatherApi = (() => {
  const apiURLHandler = (search, time) => {
    let baseURL = "https://api.weatherapi.com/v1/";
    let apiKey = "key=729e44ee64834065836160427230104";
    if ((time = "current")) {
      baseURL += "current.json?" + apiKey + "&q=" + search;
    }

    return baseURL;
  };

  const currentWeather = (location) => {};

  const defaultCurrentWeather = () => {
    let defaultIPLookup = "auto:ip";
    const finalURL = apiURLHandler(defaultIPLookup);
    console.log(finalURL);
    let data = apiLookup(finalURL);

    return data;
  };

  const locationSearchHandler = () => {};

  const apiLookup = (finalURL) => {
    const data = fetch(finalURL, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        return response;
      });

    return data;
  };

  return {
    defaultCurrentWeather,
  };
})();

export { weatherApi };
