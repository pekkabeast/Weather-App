//Function to make API call
import { updatePage } from "./UI";

const weatherApi = (() => {
  const currentURLHandler = (search) => {
    let baseURL =
      "https://api.weatherapi.com/v1/current.json?key=729e44ee64834065836160427230104&q=" +
      search;

    return baseURL;
  };

  const searchURLHandler = (search) => {
    let baseURL =
      "https://api.weatherapi.com/v1/search.json?key=729e44ee64834065836160427230104&q=" +
      search;
    return baseURL;
  };

  const apiLookup = (finalURL) => {
    const data = fetch(finalURL, { mode: "cors" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //Indicate that error happened
        return err;
      });

    return Promise.resolve(data);
  };

  //Get current Weather based on user's IP
  const defaultCurrentWeather = () => {
    let defaultIPLookup = "auto:ip";
    const finalURL = currentURLHandler(defaultIPLookup);
    return apiLookup(finalURL);
  };

  const customCurrentWeather = (location) => {
    let finalURL = currentURLHandler(location);
    return apiLookup(finalURL);
  };

  const locationSearchHandler = () => {
    const form = document.getElementById("customLocation");
    form.addEventListener("submit", (event) => {
      let searchTerm = document.getElementById("searchbar").value;
      let finalURL = searchURLHandler(searchTerm);
      let apiReturnData = searchApiVerifier(finalURL);
      apiReturnData.then((data) => {
        updatePage.updateWeatherTileDisplay(data[0].name);
        updatePage.updateLocationHeader(data[0]);
      });

      event.preventDefault();
      form.reset();
    });
  };

  const searchApiVerifier = (finalURL) => {
    let data = apiLookup(finalURL);
    data
      .then((data) => {
        if (data instanceof Error) {
          return data;
        } else if (data.length == 0) {
          //Form verification handling
          throw new Error("Invalid Location");
        } else if (data.length == 1) {
          return data;
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        return err;
      });

    return Promise.resolve(data);
  };

  return {
    defaultCurrentWeather,
    locationSearchHandler,
    customCurrentWeather,
  };
})();

export { weatherApi };
