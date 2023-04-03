//Function to make API call

const weatherApi = (() => {
  const currentURLHandler = (search) => {
    let baseURL =
      "https://api.weatherapi.com/v1/current.json?key=729e44ee64834065836160427230104&q=" +
      search;

    return baseURL;
  };

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

  //Get current Weather based on user's IP
  const defaultCurrentWeather = () => {
    let defaultIPLookup = "auto:ip";
    const finalURL = currentURLHandler(defaultIPLookup);
    return apiLookup(finalURL);
  };

  const customCurrentWeather = (location) => {};

  const locationSearchHandler = () => {};

  return {
    defaultCurrentWeather,
  };
})();

export { weatherApi };
