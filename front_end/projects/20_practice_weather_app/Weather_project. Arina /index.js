const WEATHER_FORM = document.querySelector(".weather-form");

const INFO_CONTAINER = document.querySelector(".info-container");
const ERROR_CONTAINER = document.querySelector(".error-container");
const LOADING_CONTAINER = document.querySelector(".loading-container");
const HISTORY_CONTAINER = document.querySelector(".history-container");

const SEARCH_WEATHER_BUTTON = document.querySelector(".search-weather-button");
const CITY_INPUT = document.querySelector(".city-input");

const CURRENT_TEMPERATURE = document.querySelector(".current-temperature");
const CITY = document.querySelector(".city");
const TEMP_PICTURES = document.querySelectorAll(".temp-picture");
const FEELS_LIKE_TEMPERATURE = document.querySelector(
  ".feels-like-temperature"
);
const SAVE_BUTTON = document.querySelector(".save-button");
const DELETE_BUTTON = document.querySelector(".delete-button");

const ERROR_CODE = document.querySelector(".error-code");
const ERROR_MESSAGE = document.querySelector(".error-message");

const SAVED_CITY = document.querySelector(".saved-city");
const DELETE_ALL_BUTTON = document.querySelector(".delete-all-button");

const API_key = "dba91550ff3a8572e6af34e2ef3d5070";

WEATHER_FORM.addEventListener("submit", async (event) => {
  event.preventDefault();

  INFO_CONTAINER.style.display = "none";
  ERROR_CONTAINER.style.display = "none";

  const city_name = event.target.city.value.trim();

  if (city_name !== "") {
    LOADING_CONTAINER.style.display = "flex";
    SEARCH_WEATHER_BUTTON.disabled = true;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`;
    const response = await fetch(URL, { method: "GET" });
    const result = await response.json();

    LOADING_CONTAINER.style.display = "none";
    SEARCH_WEATHER_BUTTON.disabled = false;

    if (response.ok === true) {
      INFO_CONTAINER.style.display = "flex";
      CITY_INPUT.value = "";

      const temp_c = Math.round(result.main.temp);
      const feels_like_c = Math.round(result.main.feels_like);
      const icon = result.weather[0].icon;
      const icon_description = result.weather[0].description;

      const URL_img = `http://openweathermap.org/img/w/${icon}.png`;

      CURRENT_TEMPERATURE.textContent = `${temp_c}°`;
      CITY.textContent = city_name;
      TEMP_PICTURES.forEach((el) => {
        el.src = URL_img;
        el.alt = `${icon}.png`;
        el.title = icon_description;
      });

      FEELS_LIKE_TEMPERATURE.textContent = `${feels_like_c}°`;
    } else {
      ERROR_CONTAINER.style.display = "flex";

      const cod = result.cod;
      const message = result.message;

      ERROR_CODE.textContent = cod;
      ERROR_MESSAGE.textContent = message;
    }
  } else {
    LOADING_CONTAINER.style.display = "none";
    SEARCH_WEATHER_BUTTON.disabled = false;
    alert("Please, enter the name of the city!");
  }
});

SAVE_BUTTON.addEventListener("click", () => {
  HISTORY_CONTAINER.style.display = "flex";

  const original_container = document.querySelector(
    ".current-temperature-container"
  );
  const cloned_container = original_container.cloneNode(true);
  const elementToRemove = cloned_container.querySelector(".save-button");
  elementToRemove.remove();
  const delete_button = cloned_container.querySelector(".delete-button");
  delete_button.addEventListener("click", () => {
    cloned_container.remove();
    const saves = HISTORY_CONTAINER.querySelectorAll(
      ".current-temperature-container"
    );
    if (saves.length === 0) {
      HISTORY_CONTAINER.style.display = "none";
    }
  });

  SAVED_CITY.append(cloned_container);
});

DELETE_BUTTON.addEventListener("click", () => {
  INFO_CONTAINER.style.display = "none";
});

DELETE_ALL_BUTTON.addEventListener("click", () => {
  const saves = HISTORY_CONTAINER.querySelectorAll(
    ".current-temperature-container"
  );
  saves.forEach((el) => el.remove());
  HISTORY_CONTAINER.style.display = "none";
});
